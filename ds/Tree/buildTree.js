/*
 * Build Tree from inorder and postorder
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var getPreOrder = function (root) {
  const result = [];
  const helper = (node) => {
    if (!node) return;
    result.push(node.val);
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return result;
};
var getInorder = function (root) {
  const result = [];
  const helper = (node) => {
    if (!node) return;
    helper(node.left);
    result.push(node.val);
    helper(node.right);
  };
  helper(root);
  return result;
};
var getPostOrder = function (root) {
  const result = [];
  const helper = (node) => {
    if (!node) return;
    helper(node.left);
    helper(node.right);
    result.push(node.val);
  };
  helper(root);
  return result;
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  const root = postorder[postorder.length - 1];
  const pivot = inorder.indexOf(root);
  return {
    val: root,
    left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
    right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1)),
  };
};

var buildTree2 = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  const root = preorder[0];
  const pivot = inorder.indexOf(root);
  return {
    val: root,
    left: buildTree2(preorder.slice(1, pivot + 1), inorder.slice(0, pivot)),
    right: buildTree2(preorder.slice(pivot + 1), inorder.slice(pivot + 1)),
  };
};
const BT = new TreeNode(1);
BT.left = new TreeNode(2);
BT.right = new TreeNode(3);

BT.left.left = new TreeNode(4);
BT.left.right = new TreeNode(5);
BT.right.left = new TreeNode(6);
BT.right.right = new TreeNode(7);
BT.right.right.left = new TreeNode(8);

// const inorder = getInorder(BT);
console.log("old inorder", getInorder(BT));
const tree1 = buildTree(getInorder(BT), getPostOrder(BT));
console.log("new inorder", getInorder(tree1));
const tree2 = buildTree2(getPreOrder(BT), getInorder(BT));
console.log("new inorder", getInorder(tree2));
