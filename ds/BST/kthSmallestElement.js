/*
    Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) 
    of all the values of the nodes in the tree.
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function kthElement(root, k) {
  const arr = [];
  const helper = (node) => {
    if (!arr[k - 1]) {
      if (node.left) helper(node.left);
      arr.push(node.val);
      if (node.right) helper(node.right);
    }
  };
  helper(root);
  return arr[k - 1];
}

var tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
console.log(kthElement(tree, 3));
