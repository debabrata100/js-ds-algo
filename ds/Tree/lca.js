// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

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
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right;
  if (!right) return left;
  return root;
};

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.righ = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// const p = root.left.left;
// const q = root.left.right;
// const lca = lowestCommonAncestor(root, p, q); // 2
// console.log(lca);
