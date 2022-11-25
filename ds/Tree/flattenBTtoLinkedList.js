// Flatten Binary Tree to Linked List

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function flatten(root) {
  if (!root) return root;
  let current = root;
  while (current != null) {
    if (current.left) {
      var last = current.left;
      while (last.right != null) last = last.right;
      var tmp = current.right;
      current.right = current.left;
      last.right = tmp;
      current.left = null;
    }
    current = current.right;
  }
  return root;
}

// var Tree = new TreeNode(1);
// Tree.left = new TreeNode(2);
// Tree.right = new TreeNode(3);
// Tree.left.left = new TreeNode(4);
// Tree.left.right = new TreeNode(5);
// Tree.left.right.left = new TreeNode(6);
// Tree.left.right.right = new TreeNode(7);
// var newTree = flatten(Tree);
// console.log(newTree)
