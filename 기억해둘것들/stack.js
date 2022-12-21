const literalStack = {
    storage : {},
    top : 0,
    push(el) {
        this.storage[++this.top] = el;
    },
    pop() {
        const result = this.storage[this.top--];
        return result;
    },
    size() {
        return this.top;
    }
}


class Stack {
    // constructor() {
    //     this.storage = {};
    //     this.top = 0;
    // }
    storage = {}
    top = 0
    // field 기능
    push(el) {
        this.storage[++this.top] = el;
    }
    pop() {
        const result = this.storage[this.top--];
        return result;
    }
    size() {
        return this.top;
    }
}

class StackPrivate {
    // constructor() {
    //     this.#storage = {};
    //     this.#top = 0;
    // } // field 생성 없이 이건 불가능
    #storage = {}
    #top = 0
    push(el) {
        this.#storage[++this.#top] = el;
    }
    pop() {
        const result = this.#storage[this.#top--];
        return result;
    }
    size() {
        return this.#top;
    }
}

function Stackf() {
    this.storage = {};
    this.top = 0;

    this.push = function (el) {
        this.storage[++this.top] = el;
    }
    this.pop = function() {
        const result = this.storage[this.top--];
        return result;
    }
    this.size = function() {
        return this.top;
    }
}

function closerStack() {
    const storage = {};
    let top = 0;

    return {
        push : function (el) {
            storage[++top] = el;
        },
        pop : function() {
            const result = storage[top--];
            return result;
        },
        size : function() {
            return top;
        }
    }
}


const s = new StackPrivate();

s.push(1);
s.push(2);

console.log(s.pop());
console.log(s.size());
console.log(s.pop());
console.log(s.size());