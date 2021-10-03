const Tree = (value, left, rigth) => (fn, _) => fn(value, left, rigth);
const EmptyTree = () => (_, fn) => fn();

module.exports = {
  Tree,
  EmptyTree,
};
