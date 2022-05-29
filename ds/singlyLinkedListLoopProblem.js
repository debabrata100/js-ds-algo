function detectLoop(head) {
  var loopExists = false;
  var slow = head;
  var fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      loopExists = true;
      break;
    }
  }
  return loopExists;
}
// Find length of the loop
function getLoopLength(head) {
  var slow = head;
  var fast = head;
  var loopExists = false;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      loopExists = true;
      break;
    }
  }
  if (!loopExists) return 0;
  let k = 1;
  var ptr1 = slow;
  var ptr2 = slow.next;
  while (ptr1 !== ptr2) {
    ptr2 = ptr2.next;
    k++;
  }
  return k;
}

function detectAndRemoveLoop(head) {
  var slow = head;
  var fast = head;
  var loopExists = false;
  // detect loop
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      loopExists = true;
      break;
    }
  }
  if (!loopExists) return null;
  // Find loop length, slow is now where loop starts
  var ptr1 = slow;
  var ptr2 = slow.next;
  let k = 1;
  while (ptr1 !== ptr2) {
    ptr2 = ptr2.next;
    k++;
  }
  // Place 2 ptrs k distance away from head
  ptr1 = head;
  ptr2 = head;
  for (var i = 0; i < k; i++) {
    ptr2 = ptr2.next;
  }
  // make both pointers meet at loop start point
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  // Run 2nd pointer untill its next value has loop start point
  while (ptr2.next !== ptr1) {
    ptr2 = ptr2.next;
  }
  // ptr2 is now tail node
  ptr2.next = null;
}
function isCircular(head) {
  var slow = head;
  var fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast) return false;
  fast = slow.next;
  let k = 1;
  while (slow !== fast) {
    fast = fast.next;
    k++;
  }
  slow = head;
  fast = head;
  for (var i = 0; i < k; i++) {
    fast = fast.next;
  }
  return slow === fast;
}
function Node(value) {
  this.value = value;
  this.next = null;
}
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;
// console.log("----isCircular", isCircular(head));
// console.log("deb----getLoopLength", getLoopLength(head));
// detectAndRemoveLoop(head);
// console.log("deb----getLoopLength", getLoopLength(head));
