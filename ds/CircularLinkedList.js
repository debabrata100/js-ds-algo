class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      node.next = this.head;
    } else {
      let start = this.head;
      let end = start;
      while (end.next !== this.head) {
        end = end.next;
      }
      end.next = node;
      node.next = this.head;
    }
    this.length++;
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.length) {
      let targetNode = this.head;
      for (let i = 0; i < index; i++) {
        targetNode = targetNode.next;
      }
      return targetNode;
    }
    return undefined;
  }
  // Insert at given position
  insert(value, index) {
    const node = new Node(value);
    if (index >= 0 && index <= this.length) {
      let previous;
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          node.next = this.head;
        } else {
          previous = this.getElementAt(this.length - 1);
          previous.next = node;
          node.next = this.head;
          this.head = node;
        }
      } else {
        previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.length++;
      return true;
    }
  }
  removeAt(index) {
    if (index >= 0 && index < this.length && this.head) {
      let removedValue;
      if (this.length === 1) {
        removedValue = this.head.value;
        this.head = null;
      } else {
        let previous;
        if (index === 0) {
          previous = this.getElementAt(this.length - 1);
        } else {
          previous = this.getElementAt(index - 1);
        }
        removedValue = previous.next.value;
        previous.next = previous.next.next;
        if (this.head.value === removedValue) {
          this.head = previous.next;
        }
      }
      this.length--;
      return removedValue;
    }
    return false;
  }
  indexOf(element) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === element) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
  isPresent(element) {
    return this.indexOf(element) !== -1;
  }
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }
  reverse() {
    let node = this.head.next;
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
  toArray() {
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
  deleteAllOddNodes() {
    let previous = this.head;
    let iterationCount = 0;
    const length = this.length;
    let next = previous.next;
    while (true) {
      if (next.value % 2 !== 0) {
        previous.next = next.next;
        this.length--;
      }
      previous = previous.next;
      next = previous.next;
      iterationCount++;
      if (iterationCount >= length) {
        break;
      }
    }
    if (this.length < 1) {
      this.head = null;
      this.length = 0;
    }
  }
}
function Node(value) {
  this.value = value;
}

/**
 *
 * @param {LinkedList} L1
 * @param {LinkedList} L2
 * @returns bool
 * This function takes 2 linked list as input to compare they are identical or not
 */
function checkIdentical(L1, L2) {
  if (L1.length !== L2.length) return false;
  let commonNode = L1.head;
  // search for common node in L2
  let startNode = L2.head;
  for (let i = 0; i < L2.length; i++) {
    if (commonNode.value === startNode.value) {
      break;
    }
    startNode = startNode.next;
  }
  for (i = 0; i < L1.length; i++) {
    startNode = startNode.next;
    commonNode = commonNode.next;
    if (startNode.value !== commonNode.value) {
      return false;
    }
  }
  return true;
}
const L1 = new CircularLinkedList();
// L1.insert(17, 0);
// L1.insert(15, 0);
// L1.insert(14, 0);
// L1.insert(13, 0);
// L1.insert(12, 0);
// L1.insert(11, 0);
// L1.insert(10, 0);
// console.log(L1.toArray());
// L1.deleteAllOddNodes();
// console.log(L1.toArray());

// const L2 = new CircularLinkedList();
// L2.append(30);
// L2.append(40);
// L2.append(50);
// L2.append(10);
// L2.append(20);
// const L3 = new CircularLinkedList();
// L3.append(30);
// L3.append(40);
// L3.append(50);
// L3.append(10);
// L3.append(20);

// console.log(checkIdentical(L2, L3));
