const str1 = "abaab";
const str2 = "aabb";

function isAnagram(str1, str2){
   if(str1.length !== str2.length)
      return false;
    let counter = {}

    for(letters of str1){
        counter[letters] = (counter[letters] || 0) + 1;
        // console.log(counter[letters]);
    }
    for(let items of str2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1;
    }
    return true;
}

const check = isAnagram("abab", "aabb");
console.log(check);
