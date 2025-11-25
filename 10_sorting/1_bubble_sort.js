function myfun(arr){
    let x
    do{
        x = false;
    for(let i =0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
            x = true;
        }
    }
    }
    while(x);
}
const arr = [43,23,4,324,42,4,34];
myfun(arr);
console.log(arr);