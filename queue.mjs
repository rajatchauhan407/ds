class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enQueue(val){
        let newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            // let temp = this.last;
            this.last.next = newNode;
            this.last = newNode;           
        }
        this.size++;
        return this;
    }
    deQueue(){
        let temp = this.first;
        if(this.size == 0) return null;
        else if(this.size == 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = temp.next;
            temp.next = null;
        }
        this.size--;
        return temp.val;
    }
}
let q = new Queue();
function createQueueFromArray(arr){
    arr.forEach(element => {
        q.enQueue(element)
    });
    return q;
}

// let q = new Queue();
// q.enQueue(23);
// q.enQueue(24);
// q.enQueue(25);
// let result = q.deQueue();
createQueueFromArray([7,9,10,34,89]);
console.log(q);
export {Queue};