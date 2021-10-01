const tree = (value, left, rigth) => (fn, _) => fn(value, left, rigth);
const emptyTree = () => (_, fn) => fn();

module.exports = {
  tree,
  emptyTree,
};
