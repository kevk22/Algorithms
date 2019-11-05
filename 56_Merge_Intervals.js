/*
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    let sorted = intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];

    mergeHelp(sorted, res);

    return res;
};

function mergeHelp(intervals, res) {
    let cur = res[0]

    for (let i = 1; i < intervals.length; i++) {
        let c2 = cur[1];
        let d1 = intervals[i][0];
        let d2 = intervals[i][1];

        if (c2 >= d1) {
            cur[1] = Math.max(c2, d2);
        } else {
            res.push(intervals[i]);
            cur = res[res.length - 1];
        }
    }
}