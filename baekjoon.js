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

function seeThis (...arg) {
    console.log(this, ...arg);
}

const bindObj = {
    name : 'bindObj'
}

const bindObj2 = {
    name : 'bindObj2'
}

const bindSeeThis = seeThis.bind(bindObj, 1, 2, 3).bind(bindObj2, 4, 5);

const obj1 = {
    name : 'obj1',
    // seeThis
    bindSeeThis
}

const obj2 = {
    name : 'obj2',
    // seeThis
    bindSeeThis
}

const arr = [() => { console.log(this)}];

seeThis();
// obj1.seeThis();
// obj2.seeThis();

bindSeeThis(10);
obj1.bindSeeThis(11);
obj2.bindSeeThis(12);
arr[0]();

// bindSeeThis.call({ name : `I'm new object`}, 13);

// const objLiteral = {
//     name : 'literal',
//     seeThis : () => {
//         console.log(this);
//     }
// }

// class MakeObj {
//     constructor(arg) {
//         this.name = arg;
//     }
//     seeThis = () => {
//         console.log(this);
//     }
// }

// const objInstance = new MakeObj('class');

// objLiteral.seeThis();
// objInstance.seeThis();

// const arr = new Array(8).fill(1);

// arr.seeThis = function() {
//     console.log(this);
// }

// arr.seeThis();


