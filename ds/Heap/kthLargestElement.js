/*
    The time complexity of adding an element in a heap of size k is O(log⁡k)\mathcal{O}(\log k)O(logk), 
    and we do it N times that means O(Nlog⁡k) time complexity for the algorithm.
    Which is better than sorting the entire array which 
    takes order of O(N logN). K is often smaller than N.
*/

class MinHeap {
  constructor(k) {
    this.values = [];
    this.capacity = k;
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp();
    if (this.values.length > this.capacity) this.remove();
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

const findKthLargest = function (nums, k) {
  const heap = new MinHeap(k);
  for (let num of nums) {
    heap.add(num);
  }
  return heap.remove();
};

// console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4)) // 4
// console.log(findKthLargest([3,2,1,5,6,4],2)) // 5
