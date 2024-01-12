import {BinarySearchTree,Node} from "./tree.mjs";
import {Queue} from "./queue.mjs";
/*  
1. Create a queue and a variable to store the values of nodes visited
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
    * Dequeue a node from the queue and push the value of the node into the variable that stores the node
    * If there is left property on the node dequeued - add it to the queue
    * If there is right property on the node dequeued - add it to the queue
4. Return the variable that stores the value
*/
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
let visited = [];
function treeTraversal(){  //Breadth First Solution
    let q = new Queue();   
    q.enQueue(tree.root);
    let current;
    while(q.first !== null){
        current = q.first;
        q.deQueue(current);
        if(current.val.left){
            q.enQueue(current.val.left);
        }
        if(current.val.right){
            q.enQueue(current.val.right);
        } 
        visited.push(current.val.value);
    }
    return visited;
}
console.log(treeTraversal());
function DFSPreOrder(){
    let visited = [];
    function dfs(node){
        // console.log(node);
        if(node.value == null) return;
        visited.push(node.value)
        if(node.left){   
            dfs(node.left);
        }
        if(node.right){
            dfs(node.right);
        }
    }
    dfs(tree.root);
    return visited;
}
function DfsPostOrder(node){
    let visited = [];
    function dfsp(node){
        // console.log(node);
        // if(node.value == null) return;
        if(node.left){   
            dfsp(node.left);
        }
        visited.push(node.value);
        if(node.right){
            dfsp(node.right);
        }
        
    }
    dfsp(tree.root);
    return visited;
    
}
function DfsInOrder(){
    let visited = [];
    function dfsi(node){
        if(node.left){   
            dfsi(node.left);
        }
        if(node.right){
            dfsi(node.right);
        }
        visited.push(node.value);
    }
    dfsi(tree.root);
    return visited;
}
// let result = DFSPreOrder();
// let result = DfsPostOrder();
// let result = treeTraversal();
let result = DfsInOrder();
// console.log(result);
// console.log(visited);

