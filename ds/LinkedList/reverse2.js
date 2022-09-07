function Node(val) {
  this.val = val;
  this.next = null;
}
function reverseBetween(head, m, n) {
  const before = { next: head };
  let prev = before;

  while (--m) {
    prev = prev.next;
    --n;
  }
  let curr = prev.next;
  while (--n) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return before.next;
}

// var head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);

// const newHead = reverseBetween(head, 3, 6);
// console.log(newHead);
