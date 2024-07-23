//Task 3 - Chain a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order

function fetchData1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetced data 1");
            resolve("Data 1");
        }, 1000);
    })
}

function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched Data 2");
            resolve( "Data 2");
        }, 1000);
    })
}

function fetchData3(){
    return new Promise((resolve, reject) => {
        {
            setTimeout(() => {
                console.log("Fetched Data 3");
                resolve("Data 3");
            }, 1000);
        }
    })
}

fetchData1()
.then((data1) => {
    console.log(data1)
    return fetchData2();
})
.then((data2) => {
    console.log(data2);
    return fetchData3();
})
.then((data3) => {
    console.log(data3)
})
.catch((error) => {
    console.log("An error occurred: ", error);
})