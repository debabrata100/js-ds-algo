function Node(val) {
  this.val = val;
  this.next = null;
}
function findCircleStart(head) {
  function traverse(node) {
    if (!node) return null;
    if (node.seen) return node;
    node.seen = true;
    return traverse(node.next);
  }
  return traverse(head);
}

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = head.next;
// console.log(findCircleStart(head));
