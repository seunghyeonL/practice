//let a = [1, 2, (a, b) => a+b];
let a = [1, 2, [1, 2]];
//let b = a.slice(0);
let b = JSON.parse(JSON.stringify(a))
//let b = [...a]
console.log(JSON.stringify(a))
console.log(a, b);
b[2][0] = 2;
console.log(a, b);