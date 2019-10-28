/*
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    //Iterate through edges and set connected regions to 'W'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O' && (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1)) {
                dfs(board, i, j);
            }
        }
    }

    //Iterate through board, set connected edge regions to 'O', set rest of regions to 'X'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'W') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }

};

function dfs(board, i, j) {
    if (i >= 0 && i < board.length && j >= 0 && j < board[i].length && board[i][j] === 'O') {
        //Mark all regions connected to an edge
        board[i][j] = 'W';

        //DFS on all conected directly connected regions
        dfs(board, i + 1, j);
        dfs(board, i - 1, j);
        dfs(board, i, j + 1);
        dfs(board, i, j - 1);
    }
}