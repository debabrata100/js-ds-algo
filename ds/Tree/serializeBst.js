function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function (root) {
  const preorder = [];
  const dfs = (node) => {
    if (node === null) return;
    preorder.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return preorder.join(",");
};

var deserialize = function (data) {
  if (data == "") return null;
  const preorder = data.split(",");
  const convert = (lower, upper) => {
    if (Number(preorder[0]) < lower || Number(preorder[0]) > upper) return null;
    if (preorder.length === 0) return null;
    let root = new TreeNode(preorder.shift());
    root.left = convert(lower, root.val);
    root.right = convert(root.val, upper);
    return root;
  };
  return convert(-Infinity, Infinity);
};

// const root = new TreeNode(10);
// root.left = new TreeNode(5);
// root.right = new TreeNode(15);
// console.log(serialize(root));
// console.log(deserialize(serialize(root)));
