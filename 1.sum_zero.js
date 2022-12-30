//checking Sum Zero problem 1
//[-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input
//[-4, 4] -> output

const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
function getSumPairZero(array){
    //Brute force Approach
    for(let num of array){
        for(let j = 1; j<array.length; j++){
            if(num + array[j] === 0){
                return [num, array[j]];
            }
        }
    }
}

const result = getSumPairZero(arr);
console.log(result);