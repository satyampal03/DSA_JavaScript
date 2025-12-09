const arr = [ 7,12,9,11,3 ]
    let min = arr[0];
for(let i = 0; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(min);