//Selection Sort Algorithm
//[3,8,2,7,5,6]

function selectionSort(array){
    for(let i =0; i<array.length; i++){
        let min = i;
        for(let j = i+1; j<array.length; j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        if(i!==min){
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

const res = selectionSort([3,8,2,7,5,6]);
console.log(res);