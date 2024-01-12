class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      var temp = this.tail;
      this.tail = newNode;
      this.tail.prev = temp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }
  shift() {
    var temp = this.head;
    if (this.legnth === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  unShift(val) {
    // adding node in the begining
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      newNode.prev = null;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter;
    let temp;
    if (index <= this.length / 2) {
      temp = this.head;
      counter = 0;
      while (index !== counter) {
        temp = temp.next;
        counter++;
      }
    } else {
      temp = this.tail;
      counter = this.length - 1;
      while (index !== counter) {
        temp = temp.prev;
        counter--;
      }
    }
    return temp;
  }
  set(index, val) {
    let current = this.get(index);
    if (!current) {
      return false;
    } else {
      current.val = val;
      return true;
    }
  }
  insert(index,value){
    let newNode = new Node(value);
    if(index < 0 || index > this.length) return null;
    else if(index == 0) return this.unShift(value);
    else if(index == this.length) return this.push(value);
    else{
      let current = this.get(index);
      let temp = current.prev;
      newNode.next = current;
      current.prev = newNode;
      temp.next = newNode;
      this.length++;
      return this;
    }
  }
  remove(index){
    let temp = this.get(index);
    let prev;
    if(index < 0 || index > this.length) return null;
    else if(index == 0) return this.shift();
    else if(index == this.length - 1) return this.pop();
    else{
    prev = temp.prev;
    prev.next = temp.next;
    temp.next.prev = prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
    }
  }
}
let dll = new DoublyLinkedList();
dll.push(13);
dll.push(23);
dll.push(200);
dll.push(300);
dll.push(400);
// let result = dll.pop();
// let result = dll.shift();
// let result = dll.unShift(500);
// let result = dll.set(3, 33);
// let result = dll.insert(0, 100);
let result = dll.remove(1);
console.log(result);
console.log(dll);
