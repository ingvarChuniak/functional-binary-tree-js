const { tree, emptyTree } = require("./index.js");
const treeCounter = require("./treeCounter.js");
const treeToObject = require("./treeToObject.js");

const defaultValue = "Some Value";
const root = tree(
  defaultValue,
  tree(defaultValue, emptyTree(), emptyTree()),
  tree(defaultValue, emptyTree(), emptyTree())
);

describe("Tree", () => {
  it("To be function", () => {
    expect(tree).toBeInstanceOf(Function);
  });
});

describe("EmptyTree", () => {
  it("To be function", () => {
    expect(emptyTree).toBeInstanceOf(Function);
  });
});

describe("Tree with two branches", () => {
  it("To have 3 values", () => {
    expect(treeCounter(root)).toBe(3);
  });
});

describe("Transform a tree to an object", () => {
  it("To be an object", () => {
    const obj = treeToObject(root);
    expect(obj).toBeInstanceOf(Object);
  });
});
