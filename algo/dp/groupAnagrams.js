/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (let s of strs) {
    var key = [...s].sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(s);
  }
  return Object.values(map);
};

// console.log(groupAnagrams(["", "", "a", "ab", "ba"]));
