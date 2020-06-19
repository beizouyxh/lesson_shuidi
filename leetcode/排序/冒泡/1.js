const arr=[1,8,9,6,5,4,2]

function BubbleSort(arr){
         for(let i = 0; i < arr.length; i++){
             //决定每一轮比较多少次
            //  console.log(arr[i])
             for(let j = 0; j < arr.length - i - 1; j++){
                 if(arr[j] > arr[j + 1]){
                    let tmp; 
                     tmp= arr[j];
                     arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                 }
            }
           
        }
        return arr
    }
console.log(BubbleSort(arr))