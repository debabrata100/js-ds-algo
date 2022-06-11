function findLongestSubstring(str) {
  let longest = 0;
  seen = {};
  start = 0;
  for (ch of str) {
    if (seen[ch]) {
      longest = Math.max(start, longest);
      start = 0;
      seen = {};
    }
    seen[ch] = (seen[ch] || 0) + 1;
    start++;
  }
  longest = Math.max(start, longest);
  return longest;
}

// console.log(findLongestSubstring("abca")); // 3
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("abcdabcdeabcd")); // 5
// console.log(findLongestSubstring("abcdabcdeabcdef")); // 6
// console.log(findLongestSubstring("longestsubstring")); // 7
// console.log(findLongestSubstring("abcdefgabcdefghiabcdefg")); // 9
