//Task 4 - Implement a Stack class wtih methods push, pop and peek;

class Stack{
    constructor(){
        this.arr = [];
    }

    push(val){
        this.arr.push(val);
    }

    pop(){
        if (this.isEmpty()) {
            throw new Error("Trying to pop from an empty stack");
        }
        return this.arr.pop();
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Trying to access the peek of empty stack");
        }

        return this.arr[this.arr.length-1]
    }
    isEmpty(){
        return this.arr.length == 0;
    }
    
}

let st = new Stack();
console.log(st.isEmpty());
st.push(20);
st.push(30);
st.push(40);
console.log("peek", st.peek());
while(!st.isEmpty()){
    console.log(st.pop());
}

//Task 4 -Use the satck class to reverse the string by puhsing all characters onto the stack and then popping them off.

let s = new Stack();
let str = "reverseme";
for(let i =0; i<str.length; i++){
    s.push(str.charAt(i));
}

let reversed = "";

while(!s.isEmpty()){
    reversed += s.pop();
}
console.log(reversed);
