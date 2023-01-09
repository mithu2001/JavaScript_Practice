//Count Unique Numbers in an Array
const arr = [1,1,2,2,3,4,4,5,6,7,2,8,3,9]
if(arr.length<=0){
    console.log("Array is Empty");
}
// let count = 0;

// for(let i = 0; i<arr.length; i++){

//     if(arr[i]!=arr[i+1]){ count++;}
// }
// console.log(count);

//map method for unsorted Array and Sorted Both array

const mp = new Map(); //creating a new map
for(let num of arr){
   mp.set(num,true); // inserting all the values into a map
}
console.log(mp.size);
