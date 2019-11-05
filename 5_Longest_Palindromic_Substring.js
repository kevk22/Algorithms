/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = [0,1];
    
    for (let i = 1; i < s.length; i++) {
      let odd = getPal(s, i - 1, i + 1);
      let even = getPal(s, i - 1, i);
      
      let curLong = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      
      if (curLong[1] - curLong[0] > longest[1] - longest[0]) {
        longest = curLong;
      }
    }
  
    return s.slice(longest[0], longest[1]);
};

function getPal(s, beg, end) {
  while (beg >= 0 && end < s.length) {
    if (s[beg] !== s[end]) break;
    
    beg--;
    end++;
  }
  
  return [beg + 1, end];
}