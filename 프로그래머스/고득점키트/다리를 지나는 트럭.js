class Queue {
    constructor() {
      this.storage = {};
      this.front = 0;
      this.rear = 0;
    }
  
    size() {
      return this.rear-this.front;
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

function solution(bridge_length, weight, truck_weights) {
    const bridge = new Queue();

    for(let i=0;i<bridge_length;i++) {
        bridge.enqueue(0);
    }

    let curWeight = 0;
    let time = 0;

    truck_weights = truck_weights.reverse();

    while(1) {
        time++;
        let out = bridge.dequeue();        
        curWeight -= out;        

        if(truck_weights.length > 0 && curWeight + truck_weights[truck_weights.length - 1] <= weight) {
            let newTruck = truck_weights.pop();
            //console.log(newTruck);
            curWeight += newTruck;
            bridge.enqueue(newTruck)
        }
        else if(truck_weights.length > 0) bridge.enqueue(0);
        
        //console.log(time);
        if(truck_weights.length === 0 && bridge.size() === 0) break;

    }



    const timeFlow = (time, curWeight) => {
        //console.log(time, curWeight, truck_weights, truck_weights[truck_weights.length - 1])
        

    }
    
    return time;
}

console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]))