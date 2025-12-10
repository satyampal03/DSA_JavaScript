// insertion Sort
const arr = [ 9,4,7,1,5]

for(let i = 1; i <arr.length; i++){
    let key = arr[i];
    let j = i-1;
    while( key < arr[j] && j >= 0  ){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}
console.log(arr);

/* 

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        while( key < arr[j] && j >= 0){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
console.log(arr);
*/