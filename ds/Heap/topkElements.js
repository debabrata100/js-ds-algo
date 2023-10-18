var topKFrequent = function (nums, k) {
  if (nums.length == k) return nums;

  const frequencyMap = new Map();
  const buckets = [];
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of frequencyMap) {
    buckets[freq] = (buckets[freq] || new Set()).add(num);
  }
  const res = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i]) {
      res.push(...buckets[i]);
    }
    if (res.length >= k) break;
  }
  return res;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
