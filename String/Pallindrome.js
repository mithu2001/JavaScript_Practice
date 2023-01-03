//Pallindrome

let str = "level";

//with predefined function
const  isPal = (str) =>{
    let reverse = str.split("").reverse().join("");
    return str.toLowerCase() === reverse.toLowerCase();
}

console.log(isPal(str));

//without any predefined function
const  isPallindrome = (str) =>{
    let s = 0;
    let e = str.length -1;
    while(s<=e){
      if(str[s]!==str[e]){
        return false;
      }
        s++;
        e--;
    }
    return true;
}

const res = isPallindrome(str);
// console.log(res);