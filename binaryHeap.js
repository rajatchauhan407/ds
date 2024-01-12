import swap from "../DataStructures/swap.js";

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    console.log(parentIndex);
    while (this.values[parentIndex] < this.values[childIndex]) {
      swap(this.values, parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
      // console.log(this.values);
    }
    return this.values;
  }

  extractMax(arr) {
    let length = arr.length - 1;
    swap(arr, 0, length);
    arr.pop();
    let pdx = 0;
    //   if (arr[leftChildIndex] == null && arr[rightChildIndex] == null) return;
    while (pdx < arr.length) {
      let leftChildIndex = 2 * pdx + 1;
      let rightChildIndex = 2 * pdx + 2;
      if(arr[leftChildIndex] == null && arr[rightChildIndex] == null) break;
      if (arr[pdx] < arr[leftChildIndex]) {
        if(arr[leftChildIndex] > arr[rightChildIndex] || arr[rightChildIndex] == null){
            swap(arr, pdx, leftChildIndex);
        }
      }
      if (arr[pdx] < arr[rightChildIndex]) {
        swap(arr, pdx, rightChildIndex);
      }
      pdx++;
    }
    return arr;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(20);
let result = heap.insert(25); 
console.log(result);
