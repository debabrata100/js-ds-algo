function validAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const lookup = {};
  for (s of str1) {
    lookup[s] = (lookup[s] || 0) + 1;
  }
  for (s of str2) {
    if (!lookup[s]) {
      return false;
    }
    lookup[s]--;
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("aza", "zza"));
console.log(validAnagram("Deb", "Bed"));
