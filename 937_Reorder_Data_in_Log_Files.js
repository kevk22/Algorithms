/*
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letterLogs = [];
    let digitLogs = [];
    
    // seperate letterlogs and digitlogs
    for (let i = 0; i < logs.length; i++) {
        let cur = logs[i].split(' ');
        
        if (!isNaN(cur[1])) {
            digitLogs.push(cur.join(' '));
        } else {
            letterLogs.push(cur.join(' '));
        }
    }
    
    // sort letterlogs lexicographically
    letterLogs.sort((a, b) => {
        let strA = a.split(' ').slice(1).join(' ');
        let strB = b.split(' ').slice(1).join(' ');
        
        if (strA === strB) return a.localeCompare(b);
        return strA.localeCompare(strB);
    });
    
    // merge and return sorted arrays 
    return [...letterLogs, ...digitLogs];
};