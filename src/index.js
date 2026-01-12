function fibs(n){
    if(n <= 0) return [];
    if(n == 1) return [0];
    if(n == 2) return [0,1];

    const arr = [0, 1]
    for(let i = 2; i < n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

console.log(fibs(8));

function fibsRec(n){
    if(n <= 0) return [];
    if(n == 1) return [0];
    if(n == 2) return [0,1];

    const arr = fibsRec(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibsRec(8));

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);

    const leftArrSorted = mergeSort(leftArr);
    const rightArrSorted = mergeSort(rightArr);

    const sortedArr = [];
    
    let i = 0, j = 0;
    while(i < leftArrSorted.length && j < rightArrSorted.length){
        if(leftArrSorted[i] < rightArrSorted[j]){
            sortedArr.push(leftArrSorted[i]);
            i++;
        }
        else{
            sortedArr.push(rightArrSorted[j]);
            j++;
        }
    }

    //Push all remaining ones
    for(i; i < leftArrSorted.length; i++){
        sortedArr.push(leftArrSorted[i]);
    }
    for(j; j < leftArrSorted.length; j++){
        sortedArr.push(rightArrSorted[j]);
    }
    return sortedArr;
}

console.log(mergeSort([105, 79, 100, 110]));