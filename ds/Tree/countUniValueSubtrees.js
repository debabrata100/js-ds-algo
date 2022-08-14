// Given the root of a binary tree, return the number of uni-value subtrees.
// A uni-value subtree means all nodes of the subtree have the same value.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var countUnivalSubtrees = function (root) {
  let count = 0;
  const findAllSubtrees = (node) => {
    if (!node) return true;
    const left = findAllSubtrees(node.left);
    const right = findAllSubtrees(node.right);

    if (!left || !right) return false;
    if (node.left && node.left.val !== node.val) return false;
    if (node.right && node.right.val !== node.val) return false;

    count++;
    return true;
  };
  findAllSubtrees(root);
  return count;
};

// const tree = new TreeNode(5);
// tree.left = new TreeNode(1);
// tree.left.left = new TreeNode(5);
// tree.left.right = new TreeNode(5);
// tree.right = new TreeNode(5);
// tree.right.right = new TreeNode(5);
// /*
//             5
//         1       5
//       5   5        5

// */

// console.log(countUnivalSubtrees(tree)); // 4
