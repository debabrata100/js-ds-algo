/**
 * Application of Priority Queue
 *  Prim's algorithm implementation can be done using priority queues.
    Dijkstra's shortest path algorithm implementation can be done using priority queues.
    A* Search algorithm implementation can be done using priority queues.
    Priority queues are used to sort heaps.
    Priority queues are used in operating system for load balancing and interrupt handling.
    Priority queues are used in huffman codes for data compression.
    In traffic light, depending upon the traffic, the colors will be given priority.
 */
class ProprityQueue {
  constructor() {
    this.values = [];
  }
  enQueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubblesUp();
  }
  deQueue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    if (this.values.length > 1) {
      this.sinkDown();
    }
    return min;
  }
  bubblesUp() {
    let elementIndex = this.values.length - 1;
    let parentIndex = Math.floor((elementIndex - 1) / 2);
    while (parentIndex >= 0) {
      if (
        this.values[elementIndex].priority < this.values[parentIndex].priority
      ) {
        this.swapValues(elementIndex, parentIndex);
      } else {
        break;
      }
      elementIndex = parentIndex;
      parentIndex = Math.floor((elementIndex - 1) / 2);
    }
  }
  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;
    console.log(length);
    while (true) {
      let swap = null;
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      if (leftChildIdx < length) {
        if (this.values[leftChildIdx].priority < element.priority) {
          swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          if (
            (swap === null &&
              this.values[rightChildIdx].priority < element.priority) ||
            (swap !== null &&
              this.values[rightChildIdx].priority <
                this.values[leftChildIdx].priority)
          ) {
            swap = rightChildIdx;
          }
        }
      }
      if (swap === null) break;
      this.swapValues(idx, swap);
      idx = swap;
    }
  }
  swapValues(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
}

function Node(val, priority) {
  this.val = val;
  this.priority = priority;
}

module.exports = ProprityQueue;

/* const pq = new ProprityQueue();
  pq.enQueue(10, 10);
  pq.enQueue(3, 3);
  pq.enQueue(9, 9);
  pq.enQueue(8, 8);
  pq.enQueue(7, 7);
  pq.enQueue(1, 1);
  console.log(pq);
  pq.deQueue();
  console.log(pq);
  pq.deQueue();
  console.log(pq);
  pq.deQueue();
  console.log(pq);
  pq.deQueue();
  console.log(pq);
*/
