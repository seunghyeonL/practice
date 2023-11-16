const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
// const readline = require('readline');

// const rl = readline.createInterface(fs.createReadStream('./input.txt'))

let h, m, t;
let cnt = 0;

rl.on("line", (line) => {
  cnt++;
  if (cnt === 1) [h, m] = line.split(" ").map((el) => Number(el));
  if (cnt === 2) t = Number(line);
}).on("close", () => {
  m = m + t;

  if (m >= 60) {
    let hplus = parseInt(m / 60);
    m = m % 60;
    h = (h + hplus) % 24;
  }

  console.log(h, m);
});
