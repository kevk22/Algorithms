/*
 * @param {string} s
 * @return {number}
 */

 //Time complexity: O(n)
var firstUniqChar = function (s) {
  let seen = {};

  for (const char of s) {
    if (seen[char] === undefined) seen[char] = 0;
    seen[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] === 1) return i;
  }


  return -1;
};