var romanToInt = function (s) {
  const symbolMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = symbolMap.get(s[i]);
    const next = symbolMap.get(s[i + 1]);
    if (cur < next) sum -= cur;
    else sum += cur;
  }

  return sum;
};
console.log(romanToInt("MCMXCIV")); // 1994
