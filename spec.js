const { Tree, EmptyTree } = require("./tree.js");
const treeCounter = require("./treeCounter.js");
const treeToObject = require("./treeToObject.js");
const treeReverse = require("./treeReverse.js");
const treeInsert = require("./treeInsert.js");

const defaultValue = "Some Value";
const root = Tree(
  defaultValue,
  Tree(defaultValue, EmptyTree(), EmptyTree()),
  Tree(defaultValue, EmptyTree(), EmptyTree())
);

describe("Tree", () => {
  it("To be function", () => {
    expect(Tree).toBeInstanceOf(Function);
  });
});

describe("EmptyTree", () => {
  it("To be function", () => {
    expect(EmptyTree).toBeInstanceOf(Function);
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
    expect(typeof obj).toBe("object");
  });
});

describe("Insert a value into a tree", () => {
  const root = Tree(100, EmptyTree(), EmptyTree());

  it("To be able insert a value", () => {
    const tree = treeToObject(treeInsert(99, root));
    expect(tree).toEqual({
      value: 100,
      left: { value: 99, left: null, rigth: null },
      rigth: null,
    });
  });

  it("To be able to insert the same values", () => {
    const tree = [1, 2, 3, 3].reduce((tree, value) => treeInsert(value, tree), root);
    const obj = treeToObject(tree);
    //todo
  });
});

describe("Reverse a tree", () => {
  it("To be equal", () => {
    const tree = Tree(
      5,
      Tree(3, Tree(1, EmptyTree(), EmptyTree()), Tree(4, EmptyTree(), EmptyTree())),
      Tree(6, EmptyTree(), EmptyTree())
    );

    const objTreeFirst = treeToObject(treeReverse(treeReverse(tree)));
    const objTreeSecond = treeToObject(tree);

    expect(objTreeFirst).toEqual(objTreeSecond);
  });
});
