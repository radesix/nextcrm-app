import { checkUploadReady, extractResourceUrls, looksLikeHtml } from "@/lib/homepage/upload-check";
import { MAX_UPLOAD_BYTES } from "@/lib/homepage/upload-limits";

const doc = (body: string, head = "") =>
  `<!doctype html><html><head>${head}</head><body>${body}</body></html>`;

describe("extractResourceUrls", () => {
  it("collects script/link/img/source/video/iframe/srcset/css url() and @import", () => {
    const html = doc(
      `<img src="https://a.test/1.png" srcset="https://a.test/2.png 2x, https://a.test/3.png 3x">
       <picture><source srcset="https://a.test/4.webp"></picture>
       <video src="https://a.test/v.mp4" poster="https://a.test/p.jpg"></video>
       <iframe src="https://a.test/frame"></iframe>
       <div style="background:url('https://a.test/bg.jpg')"></div>
       <script src="https://a.test/s.js"></script>`,
      `<link rel="stylesheet" href="https://a.test/s.css"><style>@import "https://a.test/i.css"; .x{background:url(https://a.test/u.png)}</style>`,
    );
    expect(extractResourceUrls(html).sort()).toEqual(
      [
        "https://a.test/1.png",
        "https://a.test/2.png",
        "https://a.test/3.png",
        "https://a.test/4.webp",
        "https://a.test/v.mp4",
        "https://a.test/p.jpg",
        "https://a.test/frame",
        "https://a.test/bg.jpg",
        "https://a.test/s.js",
        "https://a.test/s.css",
        "https://a.test/i.css",
        "https://a.test/u.png",
      ].sort(),
    );
  });

  it("ignores navigation links, data: URIs, fragments, tel: and mailto:", () => {
    const html = doc(
      `<a href="https://example.com/book">Book</a><a href="tel:123">t</a><a href="mailto:a@b.c">m</a><a href="#x">x</a>
       <img src="data:image/png;base64,AAAA"><div style="background:url(data:image/png;base64,BBBB)"></div>`,
    );
    expect(extractResourceUrls(html)).toEqual([]);
  });

  it("collects <object data> and SVG <image href>/<image xlink:href>", () => {
    const html = doc(
      `<object data="https://a.test/o.svg"></object>
       <svg><image href="https://a.test/h.png"/><image xlink:href="https://a.test/x.png"/></svg>`,
    );
    expect(extractResourceUrls(html).sort()).toEqual(
      ["https://a.test/h.png", "https://a.test/o.svg", "https://a.test/x.png"].sort(),
    );
  });

  it("does not treat <link rel=preconnect> as a loaded resource", () => {
    const html = doc("", `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`);
    expect(extractResourceUrls(html)).toEqual([]);
  });
});

describe("checkUploadReady", () => {
  it("passes a self-contained page that only loads allowlisted resources", () => {
    const html = doc(
      `<img src="data:image/jpeg;base64,AAAA" alt="x"><a href="https://example.com">x</a>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>`,
      `<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">`,
    );
    const r = checkUploadReady(html);
    expect(r.problems).toEqual([]);
    expect(r.ok).toBe(true);
    expect(r.bytes).toBe(Buffer.byteLength(html, "utf8"));
  });

  it("flags a non-allowlisted remote resource the screenshot renderer would block", () => {
    const r = checkUploadReady(doc(`<img src="https://images.unsplash.com/x.jpg" alt="x">`));
    expect(r.ok).toBe(false);
    expect(r.problems.join("\n")).toMatch(/images\.unsplash\.com/);
  });

  it("flags a GSAP version other than the pinned one", () => {
    const r = checkUploadReady(
      doc(`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>`),
    );
    expect(r.ok).toBe(false);
  });

  it("flags leftover image/logo tokens (the upload path strips them, leaving no image)", () => {
    const r = checkUploadReady(doc(`<img src="__RADE_IMG_1__" alt="x"><img src="__RADE_LOGO_SRC__" alt="l">`));
    expect(r.ok).toBe(false);
    expect(r.problems.join("\n")).toMatch(/__RADE_IMG_1__/);
    expect(r.problems.join("\n")).toMatch(/__RADE_LOGO_SRC__/);
  });

  it("flags a file over the upload limit", () => {
    const r = checkUploadReady(doc("x".repeat(MAX_UPLOAD_BYTES)));
    expect(r.ok).toBe(false);
    expect(r.problems.join("\n")).toMatch(/4 MB|limit/i);
  });

  it("flags text that the upload endpoint would reject as not HTML", () => {
    const r = checkUploadReady("just some text");
    expect(r.ok).toBe(false);
  });
});

describe("looksLikeHtml", () => {
  it("accepts a document with <html>, a doctype, or a <body>", () => {
    expect(looksLikeHtml("<!DOCTYPE html><p>x</p>")).toBe(true);
    expect(looksLikeHtml("  <HTML></HTML>")).toBe(true);
    expect(looksLikeHtml("<body>x</body>")).toBe(true);
  });

  it("rejects plain text and fragments", () => {
    expect(looksLikeHtml("hello")).toBe(false);
    expect(looksLikeHtml("<div>x</div>")).toBe(false);
  });
});
