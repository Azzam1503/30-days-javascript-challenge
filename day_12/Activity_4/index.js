//Task 6 Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log the an appropriate message
const p = new Promise((resolve, reject) =>{
    const randomValue = Math.round(Math.random() * 10);
    setTimeout(() => {
        if(randomValue<5){
            resolve("Promsise resolved");
        }else{
            reject(new Error("Promise reject"));
        }
    }, 1000)
}) 

p.
then((data) => {
    console.log(data);
    console.log("-----------------------------")
})
.catch((error) => {
    console.error(error.message);
    console.log("--------------------------")
});

//Task 7 Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function getData(){
    try {
        const data = await p;
        console.log(data);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }finally{
        console.log("--------------------------------")
    }
}

getData();
