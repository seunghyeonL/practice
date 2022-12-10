const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim(); //readFileSync(0) : stdin

// const readline = require('readline');
// const rl = readline.createInterface(fs.createReadStream('./input.txt'));

function makePartStrSet(str) {
    const result = new Set();
    for(let start = 0 ; start < str.length ; start++) {
        for(let end = start+1 ; end <= str.length ; end++) {
            result.add(str.slice(start, end));
        }
    }
    return result;
}

console.log(makePartStrSet(input).size);
