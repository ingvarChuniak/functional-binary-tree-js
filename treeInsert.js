const { Tree, EmptyTree } = require("./tree.js");

const treeInsert = (newValue, tree) =>
  tree(
    (value, left, rigth) =>
      newValue <= value
        ? Tree(value, treeInsert(newValue, left), rigth)
        : Tree(value, left, treeInsert(newValue, rigth)),
    () => Tree(newValue, EmptyTree(), EmptyTree())
  );

module.exports = treeInsert;
