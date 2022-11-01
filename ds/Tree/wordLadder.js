function ladderLength(beginWord, endWord, wordList) {
  let steps = 1;
  let queue = [beginWord];
  const wordSet = new Set(wordList);

  while (queue.length > 0) {
    let next = [];
    for (let word of queue) {
      if (word === endWord) return steps;
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
            console.log(next);
          }
        }
      }
    }
    queue = next;
    steps++;
  }
  return 0;
}

// const l = ladderLength("hit", "cog", [
//   "hot",
//   "dot",
//   "dog",
//   "lot",
//   "log",
//   "cog",
// ]);

// console.log(l); //5
