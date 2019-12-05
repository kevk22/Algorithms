/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// O(n) space using first row and column as flags
var setZeroes = function (matrix) {
    let colCheck = false;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) colCheck = true;

        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
    }

    if (matrix[0][0] === 0) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    if (colCheck) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};



// O(m + n) space 
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