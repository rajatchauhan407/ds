// piece of data  - val
// reference to next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
      var newNode = new Node(val);
      if(this.head == null){
          this.head = newNode;
          this.tail = this.head;
      }else{
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
    } 
    pop(){
        if(this.length === 0) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail= current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    // Shift PseudoCode
    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // decrement the length by 1
    // Return the value of the node removed
    shift(){
        if(this.length === 0) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // Unshifting Pseudocode
    // function should accept a value
    // create a new node using the value passed to the function 
    // If there is no head property on the list, set the head and tail to be newly created node
    // Otherwise, set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node.
    // Increament the length of list by 1 and finally return the linked list.
    unShift(value){
        let newHead = new Node(value);
            if(!this.head){
                this.head = newHead;
                this.tail = this.head;
            }else{
                newHead.next = this.head;
                this.head = newHead;
            }
          
            this.length++;
            return this;
    }
    // Get PseudoCode
    // The function should accept an index
    // If the index is less than zero or greater than or equal to the length of the list, return null
    // Loop through the list until you reach the index and return the node at that specific index
    get(index)
    {
        if(index < 0 || index >= this.length) return null;
        let currentHead = this.head;
        // for(let i=0; i < this.length ; i++)
        // {
        //     if(index == i)
        //     {
        //         return currentHead.val;
        //     }
        //     currentHead = currentHead.next;
        // }
        let counter = 0;
        while(index !== counter){
            currentHead = currentHead.next;
            counter++;
        }
        return currentHead;
    }
        getIndex(index){
            let current = this.head;
            let counter =0;
            if(index === 0){
                return current;
            }
            if(index>this.length-1 || index < 0){
                return null;
            }
            while(current.next){
                current = current.next;
                counter++;
                if(counter === index){
                    return current;
                }
            }
        }
    // PseudoCode for Set
    // Changing the value of the node based on its position in the linked list 
    // The functionshould accept a value and an index
    // If the node is not found, return false
    // If the node is found, return the value of the node to be value passed to the function and return true
        set(index,val){
          let current =  this.get(index);
          if(current){
            current.val = val;
            return true;
          }
          return false;
          
        }
    // PseudoCode for Insert
    // Adding a node to the linked list at a specific position
    // If the index is less than zero or greater than length, return false
    // If the index is same as the length, push the new node at the end of the list
    // If the index is 0, unshift a new node to the start of the list
    // Otherwise, using the get method, access the node at the (index-1)
    // set the next property on that node to be new node
    // Set the next property on the new node to be the previous next 
    // Increment the length
    // Return true
    insert(index,val){
        let newNode = new Node(val);
        if(index < 0 || index > this.length) return null;
        if(index == 0){
            this.unShift(val);
            return true;
        }else if(index == this.length){
            this.push(val);
            return true;
        }else{
             let previousNode = this.get(index-1);
             let temp = previousNode.next;
             previousNode.next = newNode;
             newNode.next = temp;
             this.length++;
             return true;
        }
    }
    // Remove PseudoCode
    // If the index is less than zero or greater than the length, return undefined
    // If the length is same as length as (length-1) then pop()
    // If the index is 0, use shift
    // Otherwise, use the get method, access the node at (index-1)
    // Set the next property on that node to be the next of next node   
     remove(index){
        if(index < 0 || index > this.length) return null;
        else if(index == this.length-1) return this.pop();
        else if(index == 0) return this.shift();
        else {
        let previousNode = this.get(index-1);
        let removed = previousNode.next;
            previousNode.next = previousNode.next.next;
            this.length--;
            return removed;
        }
     }
     reverse(){
        if(this.length == 0) return undefined;
        let currentNode = this.head;
        let oldNext = currentNode.next;
        let newTemp = oldNext.next;
        this.tail = this.head;
        let counter = 0;
        while(counter < this.length - 2){
            oldNext.next = currentNode;
            currentNode = oldNext;
            oldNext = newTemp;
            newTemp = oldNext.next;
            this.head = oldNext;
            this.head.next = currentNode;
            counter++;
         }
         this.tail.next = null;
        return this;
     }  
    }
    function print(list){
        console.log(list);
        obj = list.head;
        let counter = 0;
        while(counter < list.length){
            console.log(obj);
            obj = obj.next;
            counter++;
        }
     }

let obj = new SinglyLinkedList();
// obj.push(39);
// obj.unShift(45);
// obj.pop();
// obj.pop();
obj.push(47);
obj.push(48);
obj.push("Hello");
obj.push("Rajat");
obj.push(49);
obj.push(50);
obj.push(92);
// obj.unShift(38);
// console.log(obj.insert(1,"Yellow"));
// let result = obj.reverse();
// console.log(obj);
// print(result);
console.log(obj.getIndex(0).val);