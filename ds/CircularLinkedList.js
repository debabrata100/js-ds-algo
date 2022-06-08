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
}
function Node(value) {
  this.value = value;
}
