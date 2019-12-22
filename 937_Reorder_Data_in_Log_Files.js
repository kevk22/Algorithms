/*
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letterLogs = [];
    let digitLogs = [];
    
    // seperate letterlogs and digitlogs
    logs.forEach((el) => {
        let check = el.split(' ')[1];

        isNaN(check) ? letterLogs.push(el) : digitLogs.push(el);
    });
    
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