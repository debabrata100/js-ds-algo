function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const levels = [];
  const helper = (node, l) => {
    if (!node) return;
    levels[l] = levels[l] || [];
    if (l % 2 === 0) {
      levels[l].push(node.val);
    } else {
      levels[l].unshift(node.val);
    }
    helper(node.left, l + 1);
    helper(node.right, l + 1);
  };
  helper(root, 0);
  return levels;
};

// const BT = new TreeNode(1);
// BT.left = new TreeNode(2);
// BT.right = new TreeNode(3);
// BT.left.left = new TreeNode(4);
// BT.right.right = new TreeNode(5);
// console.log(zigzagLevelOrder(BT)); //[ [ 1 ], [ 3, 2 ], [ 4, 5 ] ]

var zigzagLevelOrder2 = function (root) {
  if (!root) return []; // Sanity check

  var result = [],
    level = [],
    s1 = [root],
    s2 = [],
    flag = true;

  while (s1.length > 0) {
    var node = s1.pop(),
      left = node.left,
      right = node.right;

    // Handle the current node
    level.push(node.val);

    // Get ready for the next level
    // the key of zigzag traversal is to control the order of pushing
    // left and right sub children
    if (flag) {
      if (left) s2.push(left);
      if (right) s2.push(right);
    } else {
      if (right) s2.push(right);
      if (left) s2.push(left);
    }

    // We just finish traversing the current level
    if (s1.length === 0) {
      result.push(level);
      level = [];
      flag = !flag;
      // Continue to traverse the next level
      s1 = s2;
      s2 = [];
    }
  }

  return result;
};
