const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 0];

/**
 * The Combinations Calculator will find the number of possible combinations
 * that can be obtained by taking a sample of items from a larger set.
 * Basically, it shows how many different possible subsets can be made from
 * the larger set.
 * @param n the size of the sample
 * @param k the size of each group
 * @returns the number of unique pairs
 */
export function combination(n: number, k: number): number {
  if (k < 1 || k > n) return 0;
  if (k === n) return 1;
  if (k === 1) return n;
  if (k === 2) return (n * (n - 1)) / 2;

  const m = n - k;
  let a, b, ia, ib, p;
  for (a = 1, b = 1, ia = k + 1, ib = 2; ia <= n || ib <= m; ) {
    if (b <= a && ib <= m) {
      b = b * ib;
      ib++;
    } else if (ia <= n) {
      a = a * ia;
      ia++;
    }
    while (!((a | b) & 1)) {
      a = a >> 1;
      b = b >> 1;
    }
    for (let j = 1; ; ++j) {
      p = prime[j];
      if (!p) break;
      if (a < p) break;
      if (b < p) break;
      while (!((a % p) + (b % p))) {
        a = a / p;
        b = b / p;
      }
    }
  }

  return a / b;
}
