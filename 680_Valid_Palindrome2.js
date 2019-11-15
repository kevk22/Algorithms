/*
 * @param {string} s
 * @return {boolean}
 */

 //Recursive
var validPalindrome = function(s, count = 0) {
  let p1 = 0;
  let p2 = s.length - 1;
  
  while (p1 < p2) {
  if(s[p1] !== s[p2]) {
      if (count > 0) return false;
      return validPalindrome(s.slice(p1, p2), 1) 
          || validPalindrome(s.slice(p1 + 1, p2 + 1), 1)
    }
    
    p1++;
    p2--;
  }
  
  return true;
};

//Iterative 
var validPalindrome = function (s) {
    let p1 = 0;
    let p2 = s.length - 1;

    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return subPalCheck(s, p1 + 1, p2) || subPalCheck(s, p1, p2 - 1);
        }

        p1++;
        p2--;
    }

    return true;
};

function subPalCheck(s, p1, p2) {

    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return false;
        }

        p1++;
        p2--;
    }

    return true;
}