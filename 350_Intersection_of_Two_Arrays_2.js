/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let c = {};
    let res = [];
    
    nums1.forEach(num => {
      if (!c[num]) c[num] = 0;
      c[num]++;
    });
  
    for (let i = 0; i < nums2.length; i++) {
      let cur = nums2[i];
      
      if (c[cur] && c[cur] > 0) {
        res.push(cur);
        c[cur]--;
      }
    }
    
    return res;
};