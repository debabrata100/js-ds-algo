class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
    // function to be implemented
    // insert(data)
    // remove(data)

    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postorder(node)
    // search(node, data)
    // breathFirstTraversal
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  getRootNode() {
    return this.root;
  }
  preOrder(node) {
    console.log(node.data);
    if (node.left) this.preOrder(node.left);
    if (node.right) this.preOrder(node.right);
  }
  inOrder(node) {
    if (node.left) this.preOrder(node.left);
    console.log(node.data);
    if (node.right) this.preOrder(node.right);
  }
  postOrder(node) {
    if (node.left) this.preOrder(node.left);
    if (node.right) this.preOrder(node.right);
    console.log(node.data);
  }
  findMinNode(node) {
    if (node.left !== null) {
      return this.findMinNode(node.left);
    } else {
      return node;
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    // when data is less than the root node, move left of root node
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    // when data is greater than the root node, move right of root node
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    // delete if its a similar node
    // if deleting node has no left children
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }
    // when both left and right are not null
    const aux = this.findMinNode(node.right);
    node.data = aux.data;
    node.right = this.removeNode(node.right, aux.data);
    return node;
  }
  search(node, data) {
    if (node === null) return null;
    if (data < node.data) return this.search(node.left, data);
    if (data > node.data) return this.search(node.right, data);
    return node;
  }
  breathFirstTraversal(node) {
    const stack = [node];
    let tempNode;
    while (stack.length > 0) {
      tempNode = stack.shift();
      console.log(tempNode.data);
      if (tempNode.left) stack.push(tempNode.left);
      if (tempNode.right) stack.push(tempNode.right);
    }
  }
}
// const bst = new BST();
// bst.insert(50);
// bst.insert(45);
// bst.insert(55);
// bst.insert(35);
// bst.insert(65);
// bst.insert(25);
// bst.insert(75);
// const root = bst.getRootNode();
// console.log(bst.findMinNode(root));
// console.log(bst.preOrder(root));
// bst.remove(50);
// console.log(bst.preOrder(root));
// console.log(bst.search(root, 25));
// bst.breathFirstTraversal(root);
