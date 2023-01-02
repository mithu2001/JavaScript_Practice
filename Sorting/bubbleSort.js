//Bubble Sort 
//A Sorting Algorithm where the largest values bubble up at the top

const arr = [10, 2, 4, 6, 8, 9];

function BubbleSort(array){
    let len = array.length; 
    
     for(let i = len; i>0; i--){
        console.log(i);
        let isSwapped;
        for(let j =0; j<i-1; j++){
            if(array[j]>array[j+1]){
                
                [array[j] ,array[j+1]] = [array[j+1] ,array[j]];
                isSwapped = true;
                
            }
        }
        if(!isSwapped){
            break;
        }
       
     }
     return array;
}

const res = BubbleSort(arr);
console.log("Sorted Element ",res);