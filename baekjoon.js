// import fs from 'fs';
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n'); //readFileSync(0) : stdin

// const readline = require('readline');
// const rl = readline.createInterface(fs.createReadStream('./input.txt'));
const range = new Array(Number(input[0])).fill(0).map((el, idx) => idx+1);
const numbers = input.slice(1).map(Number);

// const id = Symbol('id');

// const obj = {
//     [id] : 1,
//     name : 'lsh'
// }

// const obj1 = Object.assign({}, obj);
// const obj2 = {...obj}

// console.log(obj1);
// console.log(obj2);
// console.log(obj1['id'])
// console.log(Object.keys(obj));

