/*
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    if (words.length < 2) return true;

    for (let i = 0; i < words.length - 1; i++) {
        let idx = 0;
        let cur = words[i];
        let after = words[i + 1];

        while (cur[idx] === after[idx]) idx++;

        if (order.indexOf(after[idx]) < 0) return false;

        if (order.indexOf(cur[idx]) > order.indexOf(after[idx])) return false;
    }

    return true;
};


//Alternate solution 

var isAlienSorted = function (words, order) {
    if (words.length < 2) return true;

    for (let i = 0; i < words.length - 1; i++) {
        let cur = words[i];
        let after = words[i + 1];
        let p1 = 0;

        if (order.indexOf(cur[p1]) > order.indexOf(after[p1])) return false;
        if (order.indexOf(cur[p1]) < order.indexOf(after[p1])) continue;

        while (p1 < cur.length) {
            if (order.indexOf(cur[p1]) > order.indexOf(after[p1])) return false;
            if (order.indexOf(cur[p1]) < order.indexOf(after[p1])) break;

            p1++;
        }
    }

    return true;
};