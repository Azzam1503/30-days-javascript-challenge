//Task 7 - Implement a TreeNode class to represent a node in a binary tree with properties value left right;
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// let root = new TreeNode(10);
// root.left = new TreeNode(5);
// root.right = new TreeNode(15);
// console.log(root.val);
// console.log(root.left.val);
// console.log(root.right.val);
console.log("-------------------------------------------------------------");
//Task 8 - Implement a BinaryTree class with moethods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new TreeNode(val);
        if(this.root == null){
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode){
        if(newNode.val < node.val){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversel(root = this.root){
        if(root == null) return;
        this.inOrderTraversel(root.left);
        process.stdout.write(root.val + " ");
        this.inOrderTraversel(root.right);
    }
}

let bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(25);
bt.insert(3);
bt.insert(23);
bt.insert(10);
bt.inOrderTraversel();

