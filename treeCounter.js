const countTree = tree =>
  tree(
    (value, left, rigth) => 1 + countTree(left) + countTree(rigth),
    () => 0
  );

module.exports = countTree;
