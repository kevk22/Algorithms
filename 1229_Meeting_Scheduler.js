/*
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */

 //Time complexity: O(n log n + m log m)
var minAvailableDuration = function (slots1, slots2, duration) {
  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);

  let p1 = 0;
  let p2 = 0;

  while (p1 < slots1.length && p2 < slots2.length) {
    let startTime = Math.max(slots1[p1][0], slots2[p2][0]);
    let endTime = Math.min(slots1[p1][1], slots2[p2][1]);

    if (startTime + duration <= endTime) return [startTime, startTime + duration];

    if (slots1[p1][1] < slots2[p2][1]) {
      p1++;
    } else {
      p2++;
    }
  }

  return [];
};