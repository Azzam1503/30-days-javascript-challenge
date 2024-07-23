//Task 8 - Use Promise.all to wait for multiple to resolve and then log all their values.

const fetchWithDelay = (msg, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, delay);
  })
}

const p1 = fetchWithDelay("Task 1", 2000);
const p2 = fetchWithDelay("Task 2", 1000);
const p3 = fetchWithDelay("Task 3", 3000);

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
    console.log("------------------------------------------------------------------");
  })
  .catch((error) => {
    console.log(error);
  })

// Task 9 Use promise.race to log the value of the first promise that resolves among multiple promises

Promise.race([p1, p2, p3])
    .then(result => {
        console.log('First resolved data:', result);
        console.log("------------------------------------------------------------------")
    })
    .catch(error => {
        console.error('There was a problem:', error);
    });