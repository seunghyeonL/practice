// import fs from 'fs';
const fs = require("fs");

// const readline = require('readline');
// const rl = readline.createInterface(fs.createReadStream('./input.txt'));

let input = fs.readFileSync("./input.txt").toString().trim(); //readFileSync(0) : stdin
const [N, K] = input.split(" ").map(Number);

const dp = [[], [1]];

function find(N) {
  const upperArr = dp[N - 1];
  const result = [];
  for (let i = 0; i < upperArr.length + 1; i++) {
    if (i === 0) result[i] = upperArr[0];
    else if (i === upperArr.length) result[i] = upperArr[upperArr.length - 1];
    else result[i] = upperArr[i - 1] + upperArr[i];
  }
  return result;
}

for (let i = 2; i <= N + 1; i++) {
  dp[i] = find(i);
}

console.log(dp[N + 1][K] % 10007);
