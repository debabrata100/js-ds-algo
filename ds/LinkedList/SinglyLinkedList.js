/**
 *  Uses:
 *  Implementation of stacks and queues
    Implementation of graphs : Adjacency list representation of graphs is most popular which is uses linked list to store adjacent vertices.
    Dynamic memory allocation : We use linked list of free blocks.
    Maintaining directory of names
    Performing arithmetic operations on long integers
    Manipulation of polynomials by storing constants in the node of linked list
    representing sparse matrices

    Applications of linked list in real world:
    Image viewer – Previous and next images are linked, hence can be accessed by next and previous button.
    Previous and next page in web browser – We can access previous and next url searched in web browser by pressing back and next button since, they are linked as linked list.
    Music Player – Songs in music player are linked to previous and next song. you can play songs either from starting or ending of the list
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.tail) return undefined;
    let value;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    value = this.tail.val;
    newTail.next = null;
    this.length--;
    this.tail = newTail;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return value;
  }
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    const shiftedValue = currentHead.val;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shiftedValue;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    while (node) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
  }
  collect() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return result;
  }
}
function Node(val) {
  this.val = val;
  this.next = null;
}
module.exports = SinglyLinkedList;

const SLL = new SinglyLinkedList();
SLL.push(1);
SLL.push(2);
SLL.push(3);
// console.log(SLL.collect());
// SLL.reverse();
// console.log(SLL.collect());
// console.log(SLL);
// console.log(SLL.pop());
// console.log(SLL.pop());
// console.log(SLL.pop());
// console.log(SLL.pop());
// console.log(SLL);
