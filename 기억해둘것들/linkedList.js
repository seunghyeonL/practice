class ListNode {
  constructor(value, prevNode, nextNode) {
    this.value = value;
    this.prevNode = prevNode;
    this.nextNode = nextNode;
  }
}

class Stack {
  constructor() {
    this.lastNode = null;
  }
  push(el) {
    this.lastNode = new ListNode(el, this.lastNode, null);
  }
  pop() {
    if (!this.lastNode) return;
    const result = this.lastNode;
    this.lastNode = this.lastNode.prevNode;
    return result.value;
  }
  size() {
    let result = 0;
    let currentNode = this.lastNode;
    while (1) {
      if (!currentNode) break;
      result++;
      currentNode = currentNode.prevNode;
    }
    return result;
  }
}

class Queue {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }
  enQueue(el) {
    const newNode = new ListNode(el, this.lastNode, null);
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else if (!this.firstNode.nextNode) {
      this.firstNode.nextNode = newNode;
      this.lastNode = newNode;
    } else {
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }
  deQueue() {
    if (!this.firstNode) return;

    if (!this.firstNode.nextNode) {
      const result = this.firstNode;
      this.firstNode = null;
      this.lastNode = null;
      return result.value;
    }

    const result = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return result.value;
  }
  size() {
    if (!this.firstNode) return 0;
    let result = 0;
    let currentNode = this.firstNode;
    while (1) {
      if (!currentNode) return result;
      currentNode = currentNode.nextNode;
      result++;
    }
    return result;
  }
}

// const s = new Stack();
// console.log(s.size());
// s.push(1);
// s.push(2);
// s.push(3);
// console.log(s.pop());
// console.log(s.size());

const q = new Queue();
console.log(q.size());
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
console.log(q.size());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
