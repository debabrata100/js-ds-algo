/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * 1 <= s.length <= 105
s consists of only lowercase English letters.
 */
var firstUniqChar = function (s) {
  var lookup = {};
  var i = 0;
  var c;
  while (i < s.length) {
    c = ((lookup[s[i]] && lookup[s[i]].c) || 0) + 1;
    lookup[s[i]] = { c, index: i };
    i++;
  }
  for (let c in lookup) {
    if (lookup[c].c === 1) return lookup[c].index;
  }
  return -1;
};

var firstUniqChar2 = function (s) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
var firstUniqChar3 = function (s) {
  var map = new Map();
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 2);
    } else {
      map.set(s[i], 1);
    }
  }

  for (i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
console.log(firstUniqChar("abcabcd"));
