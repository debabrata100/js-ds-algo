/**
 * Time Comlexity: O(n)
 * Space Comlexity: O(1)
 */
function fibonacci(n) {
  let n1 = 1;
  let n2 = 1;
  let temp;
  for (let i = 2; i < n; i++) {
    temp = n2;
    n2 = n1 + n2;
    n1 = temp;
  }
  return n2;
}
/**
 * Time Comlexity: O(2^n)
 */
function fibonacciRecursive(n) {
  if (n < 3) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
/**
 * Time Comlexity: O(n)
 * Most efficient in terms of time comlexity
 * Space Complexity O(n)
 */
function fibMemo(n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n < 3) return 1;
  cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
  return cache[n];
}

// console.log(fibMemo(1000));
// console.log(fibonacci(1000));
