// Node.js program to find the length of longest increasing subsequence
function findLongestIncreasingSubsequence(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let dp = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let maxLength = 1;
  for (let i = 0; i < arr.length; i++) {
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

// Example usage
const nums = [5, 24, 7, 39, 20];
console.log(findLongestIncreasingSubsequence(nums)); // Output: 2
