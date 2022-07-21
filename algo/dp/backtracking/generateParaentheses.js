const generateParenthesis = (n) => {
  const res = [];

  const go = (l, r, s) => {
    console.log("l,r:", l, r, s);
    // console.log("r:", r);
    // l: left remaining, r: right remaining
    if (l > r) return; // Validate by the number of '(' should be always >= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + "(");
    if (r > 0) go(l, r - 1, s + ")");
  };

  go(n, n, "");
  return res;
};
const generateParenthesis2 = (n) => {
  const res = [];
  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) go(l + 1, r, s + "(");
    if (r < l) go(l, r + 1, s + ")");
  };

  go(0, 0, "");
  return res;
};
console.log(generateParenthesis(2));
