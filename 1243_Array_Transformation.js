/*
 *  @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function(arr) {
    if (arr.length < 2) return arr;
    
    while (true) {
      let prev = arr.slice();
      
      for (let i = 1; i < arr.length - 1; i++) {
        if (prev[i] > prev[i+1] && prev[i] > prev[i-1]) {
          arr[i]--;
        } else if (prev[i] < prev[i+1] && prev[i] < prev[i-1]) {
          arr[i]++;
        }
      }
      
      if (prev.join('') === arr.join('')) break;
    }
    
  return arr;
};