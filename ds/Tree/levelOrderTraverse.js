// Breath First Traversal
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const levels = [];
  if (!root) return [];
  const helper = (node, level) => {
    if (!node) return;
    if (!levels[level]) levels[level] = [];
    levels[level].push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root, 0);
  return levels;
};

// const BT = new TreeNode(1);
// BT.left = new TreeNode(2);
// BT.right = new TreeNode(3);
// BT.left.left = new TreeNode(4);
// BT.left.right = new TreeNode(5);
// BT.right.left = new TreeNode(6);
// BT.right.right = new TreeNode(7);
// console.log(levelOrder(BT));
