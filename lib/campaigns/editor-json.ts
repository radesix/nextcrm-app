// fork: TipTap's editor.getJSON() hands back ProseMirror `attrs` objects built
// with Object.create(null). React can't serialize null-prototype objects as
// plain data, so it sends them to a server action as opaque temporary client
// references; Prisma then crashes inspecting the Json column ("Cannot access
// toStringTag on the server", minified React error #441 in prod). A JSON
// round-trip rebuilds everything as plain objects.
export function getPlainEditorJson(editor: { getJSON(): unknown }): object {
  return JSON.parse(JSON.stringify(editor.getJSON())) as object;
}
