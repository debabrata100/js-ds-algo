function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  if (!root) return 0;
  let maxLevel = 0;
  const helper = (root, level) => {
    if (level > maxLevel) maxLevel = level;
    if (root.left) helper(root.left, level + 1);
    if (root.right) helper(root.right, level + 1);
  };
  helper(root, 0);
  return maxLevel + 1;
};
// const bt = new TreeNode(50);
// bt.left = new TreeNode(10);
// console.log(maxDepth(bt));
