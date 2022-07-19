/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val === val) {
    // <-- Remove head untill it has val
    head = head.next;
  }
  if (!head) return null;
  head.next = removeElements(head.next, val); // <-- Repeat above from next as well
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
