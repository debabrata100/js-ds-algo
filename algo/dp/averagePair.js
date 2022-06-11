function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;
  const pairs = [];
  let currentAvg;
  while (left < right) {
    currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg === targetAvg) {
      pairs.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (currentAvg < targetAvg) {
      left++;
    } else if (currentAvg > targetAvg) {
      right--;
    }
  }
  return pairs;
}

// console.log(averagePair([1, 2, 3, 4, 5, 6], 2.5)); // [1,4], [2,3]
// console.log(averagePair([1, 2, 3, 4, 5, 6], 3.5)); // [1,4], [2,3]
