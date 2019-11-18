/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length <= 1) return true;
  
  const alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz';
  let newStr = "";
  
  s.split('').forEach(char => {
    if (alphaNum.indexOf(char) > -1 || alphaNum.indexOf(char.toLowerCase()) > -1) {
      newStr += char.toLowerCase();
    }
  });
  
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) return false;
  }
  
  return true;
};



// Approach # 2
var isPalindrome = function (s) {
    const alph = "0123456789abcdefghijklmnopqrstuvwxyz ";
    let newSen = "";
    
    for (let i = 0; i < s.length; i++) {
        let cur = s[i].toLowerCase();
        
        if (alph.includes(cur)) {
            newSen += cur;
        }
    }
    
    newSen = newSen.split(' ').join('');
    return newSen === newSen.split('').reverse().join('');
};