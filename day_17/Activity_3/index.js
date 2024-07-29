//Task 5 - Implement a queue class with methods enqueue (add element), dequeue(remvoe element), and front(view first element);

class Queue{
    constructor(){
        this.arr = [];
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    enqueue(val){
        this.arr.push(val);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Try to removing the element from empty Queue");
        }

        return this.arr.shift();
    }

    front(){
        if(this.isEmpty()){
            throw new Error("Try to access the front element of a empty Queue");
        }

        return this.arr[0];
    }
}

let q = new Queue();
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
console.log("20 -" , q.front());
q.dequeue();
console.log("30 -", q.front());
q.dequeue();
console.log("40 -", q.front());
q.dequeue();
console.log("50 -", q.front());

//Task 6- Use the queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order

let printer = new Queue();

printer.enqueue("Task 1");
printer.enqueue("Task 2");
printer.enqueue("Task 3");
printer.enqueue("Task 4");
printer.enqueue("Task 5");
printer.enqueue("Task 6");

while(!printer.isEmpty()){
    console.log(printer.dequeue() + "Completed");
}