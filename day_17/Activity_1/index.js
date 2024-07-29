const Node = require("./Node.js");
//Task 1 - Implement a Node class to represent an element in a linked list with properties value and next.\
// Implemeneted in Node.js;
let head = new Node(5);
head.next = new Node(10)
// console.log(head);
// console.log(head.next);

console.log("------------------------------------------------");
//Task 2- Implement a LinkedList class with methods to add a node to the end, remove the node from the end and display all nodes.

class LinkedList {
    constructor(){
        this.head = null;
    }

    show(){
        let temp = this;
        while(temp != null){
            process.stdout.write(temp.val + "->")
            temp = temp.next;
        }
    }

    add(newNodeVal){ 
        const newNode = new Node(newNodeVal);
        if(this.head == null){
            this.head = new Node(newNodeVal)
        }else{
            let temp = this.head;
            while(temp.next != null) temp = temp.next;
            temp.next = newNode;
        }
    }

    remove(){
        if(!this.head){
            return;
        }else if(!this.head.next){
            this.head = null;
            return;
        }
        let temp = this.head;
        while(temp.next.next != null) temp = temp.next;
        temp.next = null;
    }

    show(){
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + " -> ");
            temp = temp.next;
        }
        console.log("null");
    }

}

let l = new LinkedList;
l.add(5);
l.add(15);
l.add(25);
l.add(35);
l.add(45);
l.show();
l.remove();
l.show();

