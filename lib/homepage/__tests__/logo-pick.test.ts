import {
  pickLogoCandidates,
  sniffImageMime,
  buildLogoDataUri,
  MAX_LOGO_BYTES,
  type LogoImgCandidate,
  type IconLinkCandidate,
} from "@/lib/homepage/logo-pick";

describe("pickLogoCandidates", () => {
  it("ranks a real logo ahead of a header accessibility-widget icon (the Salon Halo case)", () => {
    // Salon Halo's header renders an accessibility 'contrast' toggle BEFORE the
    // logo; a first-match-wins selector grabbed that icon instead of the logo.
    const imgs: LogoImgCandidate[] = [
      { url: "https://cdn/setting-icon.png", alt: "normal Contrast", cls: "img-w", inHeaderNav: true },
      { url: "https://cdn/logo.png", alt: "SALON HALO", inLogoCtx: true, inHeaderNav: true },
    ];
    const order = pickLogoCandidates(imgs, []);
    expect(order[0]).toBe("https://cdn/logo.png");
    // the junk icon is still a last-resort fallback, but strictly after the logo
    expect(order.indexOf("https://cdn/logo.png")).toBeLessThan(order.indexOf("https://cdn/setting-icon.png"));
  });

  it("prefers an image whose filename/alt/class says 'logo' over a neutral header image", () => {
    const imgs: LogoImgCandidate[] = [
      { url: "https://cdn/hero-banner.jpg", alt: "", inHeaderNav: true },
      { url: "https://cdn/brand-logo.svg", alt: "Acme", inHeaderNav: true },
    ];
    expect(pickLogoCandidates(imgs, [])[0]).toBe("https://cdn/brand-logo.svg");
  });

  it("falls back to icon links, largest first, after image candidates", () => {
    const links: IconLinkCandidate[] = [
      { rel: "icon", href: "https://s/favicon.ico", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "https://s/at-180.png", sizes: "180x180" },
    ];
    const order = pickLogoCandidates([{ url: "https://cdn/logo.png", alt: "x", inLogoCtx: true }], links);
    expect(order[0]).toBe("https://cdn/logo.png");
    expect(order.indexOf("https://s/at-180.png")).toBeLessThan(order.indexOf("https://s/favicon.ico"));
  });

  it("dedupes repeated urls and drops blanks", () => {
    const imgs: LogoImgCandidate[] = [
      { url: "https://cdn/logo.png", alt: "logo", inLogoCtx: true },
      { url: "https://cdn/logo.png", alt: "logo again", inLogoCtx: true },
      { url: "", alt: "blank" },
    ];
    const order = pickLogoCandidates(imgs, []);
    expect(order.filter((u) => u === "https://cdn/logo.png")).toHaveLength(1);
    expect(order).not.toContain("");
  });
});

describe("sniffImageMime", () => {
  const u8 = (...b: number[]) => new Uint8Array(b);
  it("detects PNG", () => expect(sniffImageMime(u8(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a))).toBe("image/png"));
  it("detects JPEG", () => expect(sniffImageMime(u8(0xff, 0xd8, 0xff, 0xe0))).toBe("image/jpeg"));
  it("detects GIF", () => expect(sniffImageMime(u8(0x47, 0x49, 0x46, 0x38, 0x39, 0x61))).toBe("image/gif"));
  it("detects ICO", () => expect(sniffImageMime(u8(0x00, 0x00, 0x01, 0x00))).toBe("image/x-icon"));
  it("detects WEBP", () => {
    const b = new Uint8Array(16);
    b.set([0x52, 0x49, 0x46, 0x46], 0); // RIFF
    b.set([0x57, 0x45, 0x42, 0x50], 8); // WEBP
    expect(sniffImageMime(b)).toBe("image/webp");
  });
  it("detects SVG from leading markup", () => {
    expect(sniffImageMime(new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"></svg>'))).toBe("image/svg+xml");
    expect(sniffImageMime(new TextEncoder().encode('<?xml version="1.0"?><svg></svg>'))).toBe("image/svg+xml");
  });
  it("detects a DOCTYPE-prefixed SVG (Illustrator/Inkscape exports)", () => {
    expect(
      sniffImageMime(
        new TextEncoder().encode('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/svg.dtd"><svg></svg>'),
      ),
    ).toBe("image/svg+xml");
  });
  it("does not treat a DOCTYPE-svg as HTML (returns svg, not null)", () =>
    expect(sniffImageMime(new TextEncoder().encode("<!doctype svg><svg/>"))).toBe("image/svg+xml"));
  it("returns null for non-image bytes", () => expect(sniffImageMime(u8(0x00, 0x01, 0x02, 0x03))).toBeNull());
  it("returns null for HTML", () => expect(sniffImageMime(new TextEncoder().encode("<!doctype html><html>"))).toBeNull());
});

describe("buildLogoDataUri", () => {
  const png = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3]);
  it("builds a data URI from an image/* content-type", () => {
    expect(buildLogoDataUri("image/png", png)).toBe(`data:image/png;base64,${png.toString("base64")}`);
  });
  it("accepts application/octet-stream when the bytes sniff as an image (the Salon Halo content-type bug)", () => {
    // setting-icon.png / logo.png on Salon Halo's CDN are served as octet-stream.
    expect(buildLogoDataUri("application/octet-stream", png)).toBe(`data:image/png;base64,${png.toString("base64")}`);
  });
  it("ignores a bogus charset suffix on the content-type", () => {
    expect(buildLogoDataUri("image/svg+xml; charset=utf-8", Buffer.from("<svg></svg>"))).toMatch(/^data:image\/svg\+xml;base64,/);
  });
  it("accepts a DOCTYPE-prefixed SVG served as image/svg+xml (not misread as HTML)", () => {
    const svg = Buffer.from('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/svg.dtd"><svg><rect/></svg>');
    expect(buildLogoDataUri("image/svg+xml", svg)).toMatch(/^data:image\/svg\+xml;base64,/);
  });
  it("rejects a non-image response even with an image content-type lie", () => {
    expect(buildLogoDataUri("image/png", Buffer.from("<html>not an image</html>"))).toBeNull();
  });
  it("rejects an empty body", () => expect(buildLogoDataUri("image/png", Buffer.alloc(0))).toBeNull());
  it("rejects a body over the size cap", () => {
    const big = Buffer.alloc(MAX_LOGO_BYTES + 1);
    big.set([0x89, 0x50, 0x4e, 0x47], 0);
    expect(buildLogoDataUri("image/png", big)).toBeNull();
  });
});
