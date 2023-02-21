Solución a prueta técnica 


function findLargestSquareSize(matrix) {
    let largestSquareSize = 0;
    let row = matrix.length;
    let col = matrix[0].length;
    let dp = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        if (matrix[i - 1][j - 1] == 1) {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
          largestSquareSize = Math.max(largestSquareSize, dp[i][j]);
        }
      }
    }
    return largestSquareSize;
  }