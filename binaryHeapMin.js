const swap = require('./swap.js');

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, prior) {
    let newNode = new Node(val, prior);
    this.values.push(newNode);
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    if (parentIndex == -1) {
      return this.values;
    }
    while (
      this.values[parentIndex].priority > this.values[childIndex].priority
    ) {
      swap(this.values, parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
      if (parentIndex < 0) return this.values;
    }
    return this.values;
  }
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
    }
    // return this.values;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild, rightChild;
          let swap = null;
          if (leftChild < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority){
                  swap = leftChildIdx;
              }
          }
          if (rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
            if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)
                ){
                    swap = rightChildIdx;
                } 
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
          }
      }
  }
}
let pq = new PriorityQueue();
pq.enqueue(20, 1);
pq.enqueue(25, 2);
pq.enqueue(15, 0);
pq.enqueue(23, 10);
pq.enqueue(99,8);
pq.dequeue();
// pq.dequeue();
// pq.dequeue();
console.log(pq);

module.exports = PriorityQueue;