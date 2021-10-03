const treeSearch = (targetValue, tree) =>
  tree(
    (value, left, right) =>
      targetValue === value || targetValue < value ? treeSearch(left) : treeSearch(right),
    () => false
  );

module.exports = treeSearch;
