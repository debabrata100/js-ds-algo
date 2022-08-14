/*
    Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var hasPathSum = function (root, targetSum, sum = 0) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === sum + root.val;
  return (
    hasPathSum(root.left, targetSum, sum + root.val) ||
    hasPathSum(root.right, targetSum, sum + root.val)
  );
};

// const bt = new TreeNode(1);
// bt.left = new TreeNode(2);
// bt.right = new TreeNode(10);
// bt.left.left = new TreeNode(3);
// console.log(hasPathSum(bt, 6)); // True
// console.log(hasPathSum(bt, 11)); // True
// console.log(hasPathSum(bt, 10)); // false
// console.log(hasPathSum(null, 0)); // false
