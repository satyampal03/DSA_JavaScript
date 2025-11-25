function targetNum(arr, target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target){
            return console.log(i);
        }
    }
    return console.log(-1);

}

targetNum([-5, 2, 10, 4, 6], 4);

// arr = [-5, 2, 10, 4, 6] // t = 6 -> Should return 4
// arr = [-5, 2, 10, 4, 6] // t = 20 -> Should return -1.