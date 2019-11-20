/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let count = {};
    let unique = new Set();
  
    nums1.forEach(num => {
      if (!count[num]) count[num] = 0;
      count[num]++;
    });
  
    for (let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];
      
        if (count[cur]) unique.add(cur);
    }
  
    return Array.from(unique); // or [...unique]
};