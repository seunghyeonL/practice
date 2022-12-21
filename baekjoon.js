const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n'); //readFileSync(0) : stdin

// const readline = require('readline');
// const rl = readline.createInterface(fs.createReadStream('./input.txt'));

const tests = input.slice(0, -1).map(el => el.split(' ').map(Number));

// a는 b의 약수?
// function isDivisor(a, b) {
//     if(b%a === 0) return true;
//     else return false;
// }

// for(let test of tests) {
//     const divisorAB = isDivisor(test[0], test[1]);
//     const divisorBA = isDivisor(test[0], test[1]);
//     if(divisorBA) return console.log('multiple');
//     else if(divisorAB) return console.log('factor');
//     else return console.log('neither'); 
// }

function hiOrder (a, b, callback) {
	return callback(a, b);
}

console.log(hiOrder(1, 2, function add (a, b) {return a+b}));


