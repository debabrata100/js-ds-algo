function Tree(value) {
  this.val = value || null;
  this.left = null;
  this.right = null;
}

function bfs(root) {
  let sum = 0;
  const helper = (node, isLeft) => {
    if (!node) return;
    if (isLeft) {
      if (!node.left && !node.right) {
        sum += node.val;
      }
    }
    if (node.left) helper(node.left, true);
    if (node.right) helper(node.right, false);
  };
  helper(root);
  return sum;
}

const T = new Tree(1);
T.left = new Tree(2);
T.right = new Tree(3);
T.left.left = new Tree(4);
T.left.right = new Tree(5);
T.right.left = new Tree(6);
T.right.right = new Tree(7);
T.left.right.left = new Tree(8);
T.left.right.right = new Tree(9);
T.right.left.left = new Tree(10);
T.right.left.right = new Tree(10);

const res = bfs(T);
console.log(res);
