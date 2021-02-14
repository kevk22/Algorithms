/*
 * @param {string} s
 * @return {boolean}
 */

//Time complexity: O(n), Space complexity: O(n)
var isValid = function (s) {
  let stack = [];
  let map = { "(": ")", "{": "}", "[": "]" };

  for (const el of s) {
    if (map[el]) {
      stack.push(map[el]);
    } else {
      if (stack.pop() !== el) return false;
    }
  }

  return (!stack.length);
};