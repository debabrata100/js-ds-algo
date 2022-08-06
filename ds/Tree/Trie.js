/* 
  A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
  Implement the Trie class:
  Trie() Initializes the trie object.
  void insert(String word) Inserts the string word into the trie.
  boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
  boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
*/
var Trie = function () {
  this.root = {};
};

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};
Trie.prototype.getRoot = function () {
  return this.root;
};
Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) return null;
    node = node[c];
  }
  return node;
};
Trie.prototype.search = function (word) {
  const node = this.traverse(word);
  if (node) return node.isWord === true;
  return false;
};

Trie.prototype.startsWith = function (prefix) {
  const node = this.traverse(prefix);
  return !!node;
};
