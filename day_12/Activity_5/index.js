//Task 8 - Use fetch API to request data from an invalid URL and hanlde the error using .catch(). Log an appropriate error message to the console

fetch("http://fsdkfdsjfsd.co")
.then(res => {
  if(!res.ok){
    throw  new Error("Cannot fetch this url");
  }
})
.catch(error => console.log("operation failed " + error.message));


// Task 9- Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate errro messge
async function fetchData(){
  try {
    const data = await fetch('https://fsdsweriowersfssv.com');
    console.log(data);
  } catch (error) {
    console.log("operation failed " + error.message);
  }
}

fetchData();

