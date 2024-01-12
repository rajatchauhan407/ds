class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right =null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
/* ###############             INSERTING A NODE IN A TREE          ##################
1. Create a node 
2. Starting at the root, if not- the root now becomes the new node;
3. If there is a root, check if the value of new node is greater than or less than the value of node
4. If it is greater => check to see if there is a node to the right 
   check if, move to that node and repeat these steps
   check if not, add that node as the right property
5. If it is less
   check to see if there is a node to the left 
   if there is, move to that node and repeat these steps
   if there is not, add that property as left property
*/
insert(val){
    let newNode = new Node(val);
    if(!this.root){
        this.root = newNode;
        return this;
    }
    let current = this.root;
    while(true){
        if(current.value === val) return undefined; 
        if(val < current.value){
            if(!current.left){
                current.left = newNode;
                return this;
            }else{
                current = current.left;
            }
        }else{
            if(val > current.value){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
            }
        }
    }
}
find(val){
    let current = this.root;
    if(!this.root) return null;
    while(true){
        if(current.value === val) return current;
        else if(val < current.value){
            if(!current.left) return false;
            else if(current.left.value === val) return current.left;
            else{
                current = current.left;
            }
        }
        else if(val > current.value){
            if(!current.right) return false;
            else if(current.right.value === val) return current.right;
            else{
                current = current.right;
            }
        }
    }
}
bfsTraversal(tree){
    let q = [];
    q.push(this.root);
    let current;
    let visited = [];
    while(q.length > 0){
        current = q[0];
        q.shift();
        visited.push(current.value);
        if(current.left !==null){
            q.push(current.left);
        }
        if(current.right !== null){
            q.push(current.right);
        }
    }
    return visited;
}
// create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// 1. Push the value of the node to the variable that stores the values
// 2. If the node has a left property, call the helper function with the right property on the node
// 3. If the node has a right property, call the helper function with the right property of the node
// Invoke the helper function with the current variable
dfsTraversalPreOrder(){
    let visited = [];
    let current = this.root;
    function dfs(current){ 
        if(current.value === null) return;
        visited.push(current.value);
        if(current.left !== null){
            dfs(current.left);
        }
        if(current.right !== null){
            dfs(current.right);
        }
    }
    dfs(current);
    return visited;
}
// Post Order Traversal
// Create a variable to store the values of nodes visited
// Write a helper function which accepts a node
// If the node has a left property, call the helper function with the left property on the node
// If the node has a right property, call the helper function with the right property on the node
// Push the value of the node to the variable that stores the values.
// Invoke the helper function with the current variable.
dfsTraversalPostOrder(){
    let visited = [];
    let current = this.root;
    function dfs(current){
        if(current.value === null) return;
        if(current.left !== null){
            dfs(current.left);
        }
        if(current.right !== null){
            dfs(current.right);
        }
        visited.push(current.value);
    }
    dfs(current);
    return visited;
}
dfsTraversalInOrder(){
    let visited = [];
    let current = this.root;
    function dfs(current){
        if(current.left !== null){
            dfs(current.left);
        }
        visited.push(current.value);
        if(current.right !== null){
            dfs(current.right);
        }
    }
    dfs(current);
    return visited;
}

_deleteNode(tree,val){
     let current = this.root;
     if(!this.root) return null;
    while(true){
        if(current.value === val) return current;
        else if(val < current.value){
            if(!current.left) return false;
            else if(current.left.value === val) return current.left;
            else{
                current = current.left;
            }
        }
        else if(val > current.value){
            if(!current.right) return false;
            else if(current.right.value === val) return current.right;
            else{
                current = current.right;
            }
        }
    }
}
}

export {BinarySearchTree,Node};
let tree = new BinarySearchTree();
function createBinaryTree(arr){
    arr.forEach((el)=>{
        tree.insert(el);
    });
    return tree;
}
// let result = createBinaryTree([10,6,3,8,15,20]);
let result = createBinaryTree([3,5,6,9,10,2,90,45,36,78,45]);
// console.log(result);
// let result1 = tree.find(1);
// console.log(result1);
// let traversedTree = tree.bfsTraversal();
// let traversedTree = tree.dfsTraversalPostOrder();
// let traversedTree = tree.dfsTraversalPreOrder();\
let traversedTree = tree.dfsTraversalInOrder();
console.log(traversedTree);