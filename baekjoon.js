const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim(); //readFileSync(0) : stdin

// const readline = require('readline');
// const rl = readline.createInterface(fs.createReadStream('./input.txt'));

function counter() {
    let value = 0;
    return {
        increase : function() {
            value++;
        }, 
        decrease : function() {
            value--;
        }, 
        seeValue : function() {
            return value;
        }
    }
}

const counter1 = counter();
console.log(counter1.seeValue());
counter1.increase();
console.log(counter1.seeValue());
counter1.increase();
console.log(counter1.seeValue());
counter1.decrease();
console.log(counter1.seeValue());
