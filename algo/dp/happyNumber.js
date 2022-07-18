/**
 * A happy number is a number defined by the following process:
    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
 * @param {number} n
 * @return {boolean}
 */
var squares = {
  0: 0,
  1: 1,
  2: 4,
  3: 9,
  4: 16,
  5: 25,
  6: 36,
  7: 49,
  8: 64,
  9: 81,
};
var isHappy = function (n) {
  if (n < 1) return false;
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; i++) {
      n += squares[s[i]];
    }
  }
  return n === 1;
};

// console.log("isHappy", isHappy(9));
