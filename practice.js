class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    size() { 
        return this.rear - this.front;
    }
    enQueue(el) {
        this.storage[this.rear++] = el;
    }
    deQueue() {
        if(this.rear === this.front) return;
        const result = this.storage[this.front];
        delete this.storage[this.front++];
        return result;
    }
}
let Q = new Queue();
let arr = [];
for(let i=0 ; i<10 ; i++) {
    Q.enQueue(i);
}
for(let i=0 ; i<11 ; i++) {
    arr.push(Q.deQueue());
    console.log(Q.size());
}
console.log(arr);

/* let a = [1, 2, 3, 4, 5];
let b = [...a.slice(0, 3), 2, ...a.slice(3)];
console.log(b) */