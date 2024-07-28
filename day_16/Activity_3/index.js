//Task 5 - Write a recursive function to rever a string. Log the result for a test case;

function reversestr(str, start = str.length, end = 0, ans = ""){
    if(start === end){
        ans += str.charAt(start);
        return ans;
    }

    return reversestr(str, start - 1, end, ans += str.charAt(start));
}


console.log(reversestr("abcd"));
console.log(reversestr(""));
console.log(reversestr("john cena"));

console.log("----------------------------------------------------------------------");

// Task 6  write a recursive function to check if a string is a palindrome. Log the result for a few test case.
function checkPalindrome(str, s = 0, e = str.length-1){
    if(str.length == 0) return true;
    if(s>=e) return true;
    if(str.charAt(s) != str.charAt(e)) return false;
    return checkPalindrome(str, s+1, e-1);
}
console.log(checkPalindrome("abba"));
console.log(checkPalindrome("abcba"));
console.log(checkPalindrome("abcdba"));
console.log(checkPalindrome("step on no pets"));