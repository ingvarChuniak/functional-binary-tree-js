const { Tree, EmptyTree } = require("./tree.js");
const treeReverse = tree =>
  tree(
    (value, left, rigth) => Tree(value, treeReverse(rigth), treeReverse(left)),
    () => EmptyTree()
  );

module.exports = treeReverse;
