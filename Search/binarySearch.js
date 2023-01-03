//Binary Search
//sorted array [1,2,3,4,5,6,7,15,17]
const arr = [1,2,3,4,5,6,7,15,17];

function BinarySearch(arr, key){

    let start = 0, end = arr.length-1;
    

        while(start<=end){
            let mid = Math.floor((end+start)/2);
            if(arr[mid]<key){
                start = mid+1;
            }
            else if(arr[mid] > key){
                end = mid - 1;
            }
            else{
                return mid;
            }
        }
}
const res = BinarySearch(arr, 15);
console.log(res);