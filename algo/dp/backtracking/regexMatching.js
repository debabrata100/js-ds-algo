/*
    Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.
    The matching should cover the entire input string (not partial).
    Constraints:
    1 <= s.length <= 20
    1 <= p.length <= 30
    s contains only lowercase English letters.
    p contains only lowercase English letters, '.', and '*'.
    It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p.length === 0) return s.length === 0;

  if (p.length > 1 && p[1] === "*") {
    if (isMatch(s, p.slice(2))) return true;
    if ((s[0] === p[0] || p[0] === ".") & (s.length > 0)) {
      return isMatch(s.slice(1), p);
    }
    return false;
  } else {
    if ((s[0] === p[0] || p[0] === ".") && s.length > 0) {
      return isMatch(s.slice(1), p.slice(1));
    }
    return false;
  }
};

// isMatch("aab", "c*a*b"); // true
// isMatch("aa", "a") // False
// isMtach("aa","a*") // True
// isMatch("abc","a*b*c*") // True
// isMatch("aa","**") // Invalid input
