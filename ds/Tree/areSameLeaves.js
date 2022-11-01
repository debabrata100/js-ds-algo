function Tree(value) {
  this.val = value || null;
  this.left = null;
  this.right = null;
}
function getLeafs(tree) {
  const leafs = [];
  const helper = (node) => {
    if (!node.left && !node.right) leafs.push(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };
  helper(tree);
  return leafs;
}
function areSameLeafs(T1, T2) {
  const leafs1 = getLeafs(T1);
  const leafs2 = getLeafs(T2);
  return leafs1.join("-") === leafs2.join("-");
}

const T = new Tree(1);
T.left = new Tree(2);
T.right = new Tree(3);
T.left.left = new Tree(4);
T.left.right = new Tree(5);

const T2 = new Tree(1);
T2.left = new Tree(3);
T2.right = new Tree(2);
T2.left.left = new Tree(4);
T2.left.right = new Tree(5);
T2.right.right = new Tree(3);

const res = areSameLeafs(T, T2);
console.log(res);
