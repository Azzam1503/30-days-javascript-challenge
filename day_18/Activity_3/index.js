//Task 6 - Write a function to count the occurences of each character in a string. Log the characters counts.
function countChars(str){
    const charCount = {}

for(let char of str){
    if(charCount[char]){
        charCount[char]++;
    }else{
        charCount[char]  = 1;
    }
}

for(const char in charCount){
    console.log(`${char}: ${charCount[char]}`);
}
}

countChars("aancdeekk");


//Task 7 - Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

