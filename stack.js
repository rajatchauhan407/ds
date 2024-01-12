// The function should accept a value
// Create a new node with that value
// if there are no nodes in the stack. set the first and last property to be the newly created node
// If there is atleast one node, create a variable that stores the current first property on the stack
// Reset the first property to be newly created node 
// Set the next property on the node to be the previously created variable
// Increment the size of the stack by 1
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.size === 0 ){
            this.first = newNode;
            this.last = newNode;
            this.size++;
            }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
            this.size++;
        }
        return this;
    }
    pop(){
        let temp = this.first;
        if(this.size == 0) return null;
        else if(this.size == 1){
            this.first = null;
            this.last = null;
            this.size--;
        }
        else{
            this.first = temp.next;
            temp.next = null;
            this.size--;
        }
        return this;
    }
}
 let stack = new Stack();
 stack.push(23);
 stack.push(34);
 stack.push(45);
//  stack.pop();
//  stack.pop();
//  stack.pop();
//  let result = stack.pop();
 console.log(stack);