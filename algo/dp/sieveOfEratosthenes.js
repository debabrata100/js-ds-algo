/**
 * Print Prime numbers upto n
 * TC: O(n)
 */

function sieveOfEratosthenes(n) {
  const primes = [];
  let i = 0;
  let c = 2;
  for (; i <= n; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  let j;
  for (i = 2; i < Math.sqrt(n); i++) {
    for (j = 2; i * j < n; j++) {
      primes[i * j] = false;
      c++;
    }
  }
  const result = [];
  for (i = 0; i < n; i++) {
    if (primes[i]) result.push(i);
    c++;
  }
  console.log(c);
  return result;
}

// console.log(sieveOfEratosthenes(10000));
