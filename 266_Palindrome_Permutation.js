/*
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let seen = {};

  for (const char of s) {
    if (!seen[char]) seen[char] = 0;
    seen[char]++;
  }

  let odds = 0;

  for (const k in seen) {
    if (seen[k] % 2 !== 0) odds++;
    if (odds > 1) return false;
  }

  if (s.length % 2 === 0) return odds === 0;
  if (s.length % 2 !== 0) return odds === 1;
};