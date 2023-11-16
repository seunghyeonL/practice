class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  // 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }

  // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.rear === this.front) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}

function solution(priorities, location) {
  let documents = priorities.map((el, idx) => [el, idx]);

  let list = new Queue();

  let sorted = [...priorities].sort();

  for (let el of documents) {
    list.enqueue(el);
  }
  let cnt = 1;

  while (list.size() > 0) {
    let document = list.dequeue();

    if (document[0] === sorted[sorted.length - 1]) {
      //console.log(cnt, list)
      if (document[1] === location) break;
      sorted.pop();
      cnt++;
    } else {
      list.enqueue(document);
      //console.log(cnt, list)
    }
  }

  //console.log(cnt);

  return cnt;
}

solution([1, 1, 9, 1, 1, 1], 0);
