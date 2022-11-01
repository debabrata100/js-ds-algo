/*
 * 
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function diameterOfBT(root) {
  let diameter = 0;
  dfs(root);
  return diameter;
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  }
}

// const T = new TreeNode(4);
// T.left = new TreeNode(-7);
// T.right = new TreeNode(-3);
// T.right.left = new TreeNode(-9);
// T.right.right = new TreeNode(-3);
// T.right.right.left = new TreeNode(-4);
// T.right.left.left = new TreeNode(-9);
// T.right.left.left.left = new TreeNode(-6);
// T.right.left.left.left.left = new TreeNode(0);
// T.right.left.left.left.right = new TreeNode(6);
// T.right.left.left.left.left.right = new TreeNode(-1);
// T.right.left.left.left.right.left = new TreeNode(-4);
// T.right.left.right = new TreeNode(-7);
// T.right.left.right.left = new TreeNode(-6);
// T.right.left.right.right = new TreeNode(-6);
// T.right.left.right.left.left = new TreeNode(5);
// T.right.left.right.right.right = new TreeNode(9);
// T.right.left.right.right.right.right = new TreeNode(-2);
// T.right.right.right = new TreeNode(-3);
// T.right.right.right.left = new TreeNode(-4);

// const d = diameterOfBT(T);
// console.log(d); //8
