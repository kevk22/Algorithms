/*
 * @param {string[]} strs
 * @return {string[][]}
 */

// Time complexity: O(n), Space complexity: O(n)
var groupAnagrams = function(strs) {
    let map = {};
    
    for (const word of strs) {
        let sortedKey = word.split('').sort().join('');
        
        if (map[sortedKey]) {
            map[sortedKey].push(word)
        } else {
            map[sortedKey] = [word];
        }
    }
    
    return Object.values(map);
};