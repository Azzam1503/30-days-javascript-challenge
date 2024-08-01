//Task 9 - Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and lgo the values from both storage mechanisms.
function saveToStorages(key, value) {
   
    localStorage.setItem(key, value);
    
    
    sessionStorage.setItem(key, value);
    
    
    const localStorageValue = localStorage.getItem(key);
    console.log(`Value from localStorage: ${localStorageValue}`);
    
    
    const sessionStorageValue = sessionStorage.getItem(key);
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

saveToStorages("name", "john doe");

//Task 10 - Verify that both stroages are empty
function checkAndClearStorages() {
    if (localStorage.length === 0) {
        console.log('localStorage is already empty.');
    } else {
        console.log(`localStorage is not empty. It contains ${localStorage.length} items. Clearing localStorage...`);
        localStorage.clear();
        console.log('localStorage has been cleared.');
    }

    if (sessionStorage.length === 0) {
        console.log('sessionStorage is already empty.');
    } else {
        console.log(`sessionStorage is not empty. It contains ${sessionStorage.length} items. Clearing sessionStorage...`);
        sessionStorage.clear();
        console.log('sessionStorage has been cleared.');
    }
}

checkAndClearStorages();