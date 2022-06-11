/**
 * Time Comlexity: O(n)
 */
function caesarCipher(str, num) {
  num = num % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let finalStr = "";
  let index;
  let requiredCh;
  for (ch of str) {
    if (ch === " ") {
      finalStr = finalStr + " ";
      continue;
    }
    index = alphabet.indexOf(ch.toLowerCase());
    index = (index + num) % 26;
    requiredCh = alphabet[index];
    if (ch === ch.toUpperCase()) finalStr = finalStr + requiredCh.toUpperCase();
    else finalStr = finalStr + requiredCh;
  }
  return finalStr;
}

// console.log(caesarCipher("Zoo Keeper", 2)); //Bqq Mggrgt
// console.log(caesarCipher("Big Car", 900)); // Ryw Sqh
