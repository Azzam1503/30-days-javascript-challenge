//Task 5 - Write a async function that waits for a promise to resolve and then logs the resolved value.
function fetchLocal(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data..");
        }, 2000);
    });
}

async function fetchDataAndLog(){
    try {
        const data = await fetchLocal();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchDataAndLog();

//Task 6 Write a async function that handles a rejected promise using try-catch and logs the error messsage;

function fetchLocal2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Erorr while fetching data");
        }, 2000);
    })
}

async function fetchAndLogData2(){
    try {
        const data = await fetchLocal2();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchAndLogData2();