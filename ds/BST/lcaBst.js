// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

// const tree = new TreeNode(10);
// tree.left = new TreeNode(5);
// tree.right = new TreeNode(15);
// tree.left.left = new TreeNode(3);
// tree.left.right = new TreeNode(7);
// console.log(lowestCommonAncestor(tree, tree.left.left, tree.left.right)); // 5
