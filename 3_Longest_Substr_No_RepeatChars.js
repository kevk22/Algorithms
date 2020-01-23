/*
 * @param {string} s
 * @return {number}
 */

// Time: O(n)
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let uniq = new Set();
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (!uniq.has(s[j])) {
            uniq.add(s[j]);
            maxLen = Math.max(maxLen, uniq.size);
            j++;
        } else {
            uniq.delete(s[i]);
            i++;
        }
    }

    return maxLen;
};