function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  var list = new ListNode();
  var head = list;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      list.next = list1;
      list1 = list1.next;
    } else {
      list.next = list2;
      list2 = list2.next;
    }
    list = list.next;
  }
  list.next = list1 || list2;
  return head.next;
};

function mergeTwoLists2(l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
    return l2;
  }
}

// var l1 = new ListNode(1);
// l1.next = new ListNode(2);

// var l2 = new ListNode(3);
// l2.next = new ListNode(4);

// console.log(mergeTwoLists2(l1, l2));
