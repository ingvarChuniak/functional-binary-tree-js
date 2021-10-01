const { tree, emptyTree } = require("./index.js");
const treeCounter = require("./treeCounter.js");

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
    const defaultValue = "Some Value";
    const root = tree(
      defaultValue,
      tree(defaultValue, emptyTree(), emptyTree()),
      tree(defaultValue, emptyTree(), emptyTree())
    );
    expect(treeCounter(root)).toBe(3);
  });
});
