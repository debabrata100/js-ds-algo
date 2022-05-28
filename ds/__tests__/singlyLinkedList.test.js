const SinglyLinkedList = require("../SinglyLinkedList");
describe("Singly LinkedList : ", () => {
  test("Singly LinkedList: push", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(3);
    expect(SLL.tail.val).toBe(3);
  });
  test("Singly LinkedList: pop", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(3);
    const value = SLL.pop();
    expect(value).toBe(3);
  });
  test("Singly LinkedList: shift", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(3);
    const value = SLL.shift();
    expect(value).toBe(1);
  });
  test("Singly LinkedList: collect", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(3);
    const list = SLL.collect();
    expect(list).toEqual([1, 2, 3]);
  });
  test("Singly LinkedList: reverse", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(1);
    SLL.push(2);
    SLL.push(3);
    SLL.reverse();
    const list = SLL.collect();
    expect(list).toEqual([3, 2, 1]);
    expect(SLL.tail.val).toBe(1);
  });
});
