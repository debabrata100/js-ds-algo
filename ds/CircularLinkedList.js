class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = this.head;
    this.length++;
  }
  shift() {
    if (!this.head) return;
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }
    let tailNode = this.head.next;
    while (tailNode.next !== this.head) {
      tailNode = tailNode.next;
    }
    this.head = this.head.next;
    tailNode.next = this.head;
    this.length--;
    return value;
  }
  pop() {
    if (!this.tail) return null;
    const returnValue = this.tail.value;
    let nodeBeforeTail = this.head;
    while (nodeBeforeTail.next !== this.tail) {
      nodeBeforeTail = nodeBeforeTail.next;
    }
    this.tail.next = null;
    nodeBeforeTail.next = this.head;
    this.tail = nodeBeforeTail;
    return returnValue;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = this.head;
    while (node !== this.head) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    node.next = previous;
  }
  collect() {
    const result = [];
    if (!this.head) return result;
    let currentNode = this.head.next;
    result.push(this.head.value);
    while (currentNode !== this.head) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}
function Node(value) {
  this.value = value;
}

// const CLL = new CircularLinkedList();
// CLL.push(10);
// CLL.push(20);
// CLL.push(30);
// CLL.push(40);
// CLL.push(50);
// console.log(CLL.collect());
// CLL.reverse();
// console.log(CLL.collect());
// console.log(CLL.pop());
// console.log(CLL.shift());
// console.log(CLL.shift());
// console.log(CLL.shift());
// console.log(CLL);
