//Task 9 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balace
    constructor(initialBal = 0){
        this.#balace = initialBal;
    }

    depositMoney(amount){
        if(amount > 0){
            this.#balace += amount;
            console.log(`${amount} depostited successfully, available balance is ${this.#balace}`)
        }else{
            console.log("Enter the positvie amount");
        }
    }

    withdrawMoney(amount){
        if(amount <= 0){
            console.log("Enter valid amount to withdraw")
        }
        else if(amount > this.#balace){
            console.log("Insufficient funds");
        }else{
            this.#balace -= amount;
            console.log(`${amount} withdrew successfully, available balance ${this.#balace}`);
        }
    }

    getBalance(){
        console.log(this.#balace);
    }
}

//Task 10 Test the Amount class operations

let a1 = new Account(500);
let a2 = new Account(0);

a1.depositMoney(300);
a2.depositMoney(100);

a1.getBalance();
a2.getBalance();

a1.withdrawMoney(700);
a1.getBalance();

a2.withdrawMoney(400);