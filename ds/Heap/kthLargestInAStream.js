/*
    Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
    Implement KthLargest class:
    KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
    int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

    Input
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
    Output
    [null, 4, 5, 5, 8, 8]

    Explanation
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3);   // return 4
    kthLargest.add(5);   // return 5
    kthLargest.add(10);  // return 5
    kthLargest.add(9);   // return 8
    kthLargest.add(4);   // return 8
*/

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.values = [];
    for (let num of nums) {
      this.add(num);
    }
    this.limitToKelements();
  }
  limitToKelements() {
    for (let i = 0; i < this.values.length - this.k; i++) {
      this.remove();
    }
  }
  add(val) {
    this.values.push(val);
    this.bubbleUp();
    if (this.values.length > this.k) {
      this.remove();
    }
    return this.values[0];
  }
  remove() {
    const min = this.values[0];
    this.values[0] = this.values.pop();
    if (this.values.length > 1) {
      this.sinkDown();
    }
    return min;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0) {
      if (this.compare(idx, parentIdx)) {
        this.swap(idx, parentIdx);
      } else {
        break;
      }
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  sinkDown() {
    let idx = 0;
    let swapIdx;
    while (true) {
      swapIdx = null;
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      if (leftIdx < this.values.length && this.compare(leftIdx, idx)) {
        swapIdx = leftIdx;
      }
      if (
        (swapIdx == null &&
          rightIdx < this.values.length &&
          this.compare(rightIdx, idx)) ||
        (swapIdx !== null &&
          rightIdx < this.values.length &&
          this.compare(rightIdx, leftIdx))
      ) {
        swapIdx = rightIdx;
      }
      if (swapIdx == null) break;
      this.swap(swapIdx, idx);
      idx = swapIdx;
    }
  }
  compare(i, j) {
    return this.values[i] < this.values[j];
  }
  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
}

const heap = new KthLargest(3, [4, 5, 8, 2]);

console.log(heap.add(3));
console.log(heap.add(5));
console.log(heap.add(10));
console.log(heap.add(9));
