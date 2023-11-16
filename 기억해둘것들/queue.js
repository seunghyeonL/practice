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
    if (this.rear === this.front) return;
    const result = this.storage[this.front];
    delete this.storage[this.front++];
    return result;
  }
}

function closureQueue() {
  const storage = {};
  let front = 0;
  let rear = 0;

  return {
    enQueue: function (el) {
      storage[rear++] = el;
    },
    deQueue: function () {
      if (front === rear) return;
      const result = storage[front];
      delete storage[front++];
      return result;
    },
    size: function () {
      return rear - front;
    },
  };
}

const q = closureQueue();

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.size());
console.log(q.deQueue());
console.log(q.size());
console.log(q.deQueue());
console.log(q.size());
console.log(q.deQueue());
