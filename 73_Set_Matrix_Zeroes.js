/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let check = {
        x: new Set(),
        y: new Set()
    };

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                check['x'].add(i);
                check['y'].add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (check['x'].has(i)) matrix[i][j] = 0;
            if (check['y'].has(j)) matrix[i][j] = 0;
        }
    }

    return matrix;
};