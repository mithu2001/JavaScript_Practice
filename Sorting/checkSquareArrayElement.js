//Checking Square in Another Array
//arr1 = [1,2,3,4], arr2 = [1,9,4,16]

function isSquareCheck(array1, array2){
    
    for(let i =0; i<array1.length; i++){
        let isSaquare = false;
        for(let j = 0; j<array2.length; j++){
            if(array1[i] * array1[i] === array2[j]){
                isSaquare = true;
            }
            if(j === array2.length-1){
                if(!isSaquare){
                    return false;
                }
            }
        }
    }
    return true;
}
const res = isSquareCheck([1,2,3,4], [1,9,4,16]);
console.log(res);