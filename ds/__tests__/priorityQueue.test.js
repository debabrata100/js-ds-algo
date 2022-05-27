const PriorityQueue = require("../PriorityQueue");
describe("Priority Queue : ", () => {
  test("Priority Queue: insert", () => {
    const pq = new PriorityQueue();
    pq.enQueue(10, 10);
    pq.enQueue(3, 3);
    pq.enQueue(9, 9);
    pq.enQueue(8, 8);
    pq.enQueue(7, 7);
    pq.enQueue(1, 1);
    expect(pq.values[0].priority).toBe(1);
  });
  test("Priority Queue: dequeue", () => {
    const pq = new PriorityQueue();
    pq.enQueue(10, 10);
    pq.enQueue(3, 3);
    pq.enQueue(9, 9);
    pq.enQueue(8, 8);
    pq.enQueue(7, 7);
    pq.enQueue(1, 1);
    const node = pq.deQueue();
    expect(node.priority).toBe(1);
  });
});
