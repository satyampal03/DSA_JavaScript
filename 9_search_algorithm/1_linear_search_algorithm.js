const arr = [-5, 2, 10, 4, 6] // t = 10 -> Should return 2

for(let i = 0; i< arr.length; i++){
    if(arr[i] === 10){
        console.log(indexOf(arr[i]));
    }else
        return -1
}



// arr = [-5, 2, 10, 4, 6] // t = 6 -> Should return 4

// arr = [-5, 2, 10, 4, 6] // t = 20 -> Should return -1.