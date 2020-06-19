function changeSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        //次数
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr
}
console.log(changeSort([1,7,8,95,2,6]))