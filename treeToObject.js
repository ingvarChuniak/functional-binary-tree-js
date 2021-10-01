const treeToObject = tree =>
  tree(
    (value, left, rigth) => {
      const result = { value };
      result.left = treeToObject(left);
      result.rigth = treeToObject(rigth);
      return result;
    },
    () => null
  );

module.exports = treeToObject;
