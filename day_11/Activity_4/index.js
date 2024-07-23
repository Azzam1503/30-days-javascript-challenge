//Task 6 Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    console.log(response)
    return response.json();
})
.then((data) =>{
    console.log(data);
})




//Task 7 Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(await data.json());
}

getData();
