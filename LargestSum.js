
//[1,2,3,4,3,5,4,6,7,8]
//count largest sum of consecutive Digits
//num is consecutive number
function largestSum(array, num){
    let max = 0;
    if(num>array){
        throw new Error("Num is not Greater than Array");
    }else{
        
        for(let i =0; i<array.length- num + 1; i++){
            let temsum = 0;
            for(let j = 0; j<num; j++){
                temsum+=array[i+j];
                
            }
            if(temsum>max){
                max = temsum;
            }
            
        }
        
    }
    return max;
}

const res = largestSum([1,2,3,4,3,5,4,6,7,8],4);
console.log("Largest Sum is : ",res);