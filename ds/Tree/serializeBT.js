function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const preorder = [];
  const helper = (root) => {
    if (!root) {
      preorder.push("null");
      return;
    }
    preorder.push(root.val);
    helper(root.left);
    helper(root.right);
  };
  helper(root);
  return preorder.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(",");
  const convert = () => {
    if (data.length === 0) return;
    let val = data.shift();
    if (val == "null") return null;
    let node = new TreeNode(val);
    node.left = convert();
    node.right = convert();
    return node;
  };
  return convert();
};

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// const data = serialize(root);
// console.log(data);
// console.log(deserialize(data));
