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