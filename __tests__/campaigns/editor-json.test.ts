import fs from "fs";
import path from "path";
import { getSchema } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TiptapImage from "@tiptap/extension-image";
import { Node } from "@tiptap/pm/model";
import { getPlainEditorJson } from "@/lib/campaigns/editor-json";

function nonPlainPaths(value: unknown, at = "$"): string[] {
  if (value === null || typeof value !== "object") return [];
  const own =
    Array.isArray(value) || Object.getPrototypeOf(value) === Object.prototype
      ? []
      : [at];
  return own.concat(
    Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      nonPlainPaths(v, `${at}.${k}`)
    )
  );
}

describe("getPlainEditorJson", () => {
  const schema = getSchema([StarterKit, Link, TiptapImage]);
  const doc = Node.fromJSON(schema, {
    type: "doc",
    content: [
      { type: "heading", attrs: { level: 1 }, content: [{ type: "text", text: "Hi" }] },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "link",
            marks: [{ type: "link", attrs: { href: "https://example.com" } }],
          },
        ],
      },
      { type: "image", attrs: { src: "{{homepage_screenshot}}" } },
    ],
  });
  const editor = { getJSON: () => doc.toJSON() };

  it("raw ProseMirror JSON contains null-prototype attrs (the bug's precondition)", () => {
    expect(nonPlainPaths(editor.getJSON()).length).toBeGreaterThan(0);
  });

  it("returns only plain objects, so it serializes to a server action as data", () => {
    const json = getPlainEditorJson(editor);
    expect(nonPlainPaths(json)).toEqual([]);
    expect(json).toEqual(JSON.parse(JSON.stringify(doc.toJSON())));
  });

  it("is what TipTapEditor passes to onChange", () => {
    const src = fs.readFileSync(
      path.join(process.cwd(), "components/campaigns/TipTapEditor.tsx"),
      "utf8"
    );
    expect(src).toMatch(/onChange\?\.\(editor\.getHTML\(\),\s*getPlainEditorJson\(editor\)\)/);
  });
});
