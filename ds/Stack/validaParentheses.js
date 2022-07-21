/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const complement = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  var p, m;
  for (let char of s) {
    if (!complement[char]) {
      stack.push(char);
      console.log(stack);
    } else {
      p = stack.pop();
      m = complement[char];
      console.log("inside else", p, m);
      if (p !== m) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// console.log(isValid("([{(}])"));
