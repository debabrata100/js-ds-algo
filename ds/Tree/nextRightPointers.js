//Populating Next Right Pointers in Each Node
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//     int val;
//     Node *left;
//     Node *right;
//     Node *next;
//   }

var connect = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length > 0) {
    let next = [];
    while (queue.length > 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};
