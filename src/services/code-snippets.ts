export const fakeCodeSnippets = [
  {
    language: "javascript",
    title: "Ordering some keys",
    code: 'const unordered = {\n  b: "foo",\n  c: "bar",\n  a: "baz",\n};\nconst ordered = Object.keys(unordered)\n  .sort()\n  .reduce((obj, key) => {\n    obj[key] = unordered[key];\n    return obj;\n  }, {});\n\nconsole.log(JSON.stringify(ordered));',
  },
  {
    language: "rust",
    title: "Opening a file in rust",
    code: 'use std::fs::File;\n\nlet mut file = File::options()\n    .read(true)\n    .write(true)\n    .open("foo.txt")?;\n',
  },
];
