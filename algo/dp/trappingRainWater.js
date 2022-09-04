function trap(height) {
  if (!height || height.length < 1) return 0;
  let res = 0;
  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  while (l < r) {
    lMax = Math.max(lMax, height[l]);

    if (height[l] < lMax) {
      res += lMax - height[l];
    }

    rMax = Math.max(rMax, height[r]);
    if (height[r] < rMax) {
      res += rMax - height[r];
    }

    height[l] < height[r] ? l++ : r--;
  }
  return res;
}
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
