/*
    Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. 
    If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property r
    oot.val = min(root.left.val, root.right.val) always holds.
    Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
    If no such second minimum value exists, output -1 instead.    
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function findSecondMinValue(root) {
  if (!root) return -1;
  if (root.left == null && root.right == null) return -1;
  let left = root.left.val;
  let right = root.right.val;
  if (left === root.val) {
    left = findSecondMinValue(root.left);
  }
  if (right === root.val) {
    right = findSecondMinValue(root.right);
  }

  if (left !== -1 && right !== -1) {
    return Math.min(left, right);
  } else if (left !== -1) {
    return left;
  } else {
    return right;
  }
}

var tree = new TreeNode(1);
tree.left = new TreeNode(1);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(1);
tree.left.right.left = new TreeNode(1);
tree.left.right.right = new TreeNode(2);
tree.right = new TreeNode(3);
console.log(findSecondMinValue(tree));
