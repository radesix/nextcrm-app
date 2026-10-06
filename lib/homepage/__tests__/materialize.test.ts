import { materializeHtml } from "@/lib/homepage/materialize";

describe("materializeHtml — logo", () => {
  it("substitutes the logo placeholder with the data URI when a logo was harvested", () => {
    const html = `<a class='logo'><img src='__RADE_LOGO_SRC__' id='logoImg' alt='Acme'></a>`;
    const out = materializeHtml(html, "data:image/png;base64,AAA", []);
    expect(out).toBe(`<a class='logo'><img src='data:image/png;base64,AAA' id='logoImg' alt='Acme'></a>`);
  });

  it("removes the logo <img> entirely when no logo was harvested (never serves <img src=''>)", () => {
    // The exact shape Salon Halo produced: model emitted the token, logo was null.
    const html = `<a class='logo'><img src='__RADE_LOGO_SRC__' id='logoImg' alt='Salon Halo'></a>`;
    const out = materializeHtml(html, null, []);
    expect(out).not.toContain("__RADE_LOGO_SRC__");
    expect(out).not.toMatch(/<img[^>]*src=(''|"")/);
    expect(out).toBe(`<a class='logo'></a>`);
  });

  it("removes a double-quoted logo <img> with the placeholder too", () => {
    const html = `<header><img src="__RADE_LOGO_SRC__" class="logo"></header>`;
    expect(materializeHtml(html, null, [])).toBe(`<header></header>`);
  });

  it("strips a stray logo placeholder even when it is not inside an <img>", () => {
    const html = `<div data-x="__RADE_LOGO_SRC__">hi</div>`;
    expect(materializeHtml(html, null, [])).toBe(`<div data-x="">hi</div>`);
  });
});

describe("materializeHtml — images (preserves existing behavior)", () => {
  it("replaces provided image tokens and blanks orphan image tokens", () => {
    const html = `<img src="__RADE_IMG_1__"><img src="__RADE_IMG_9__">`;
    const out = materializeHtml(html, null, [{ token: "__RADE_IMG_1__", url: "https://x/img-1.png" }]);
    expect(out).toContain('src="https://x/img-1.png"');
    expect(out).not.toContain("__RADE_IMG_9__");
  });

  it("substitutes both the logo and image tokens together", () => {
    const html = `<img src="__RADE_LOGO_SRC__"><img src="__RADE_IMG_1__">`;
    const out = materializeHtml(html, "data:image/png;base64,LOGO", [
      { token: "__RADE_IMG_1__", url: "https://x/img-1.png" },
    ]);
    expect(out).toBe(`<img src="data:image/png;base64,LOGO"><img src="https://x/img-1.png">`);
  });
});
