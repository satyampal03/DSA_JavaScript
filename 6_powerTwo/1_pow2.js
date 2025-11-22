
// is given integer is power of two
function bitwise(n){
    if(n<1){
        return false
    }
    return(n &(n-1) ===0)
}


console.log(bitwise(2)); // True
console.log(bitwise(5)); // False

// function int(n){
//     if(n<1){
//         return false
//     }
//     while(n > 1){
//         if(n%2 !== 0){
//             return false
//         }
//         n = n/2;
//     }

//     return true

// }

// console.log(int(8)); // True
// console.log(int(5)); // False

// Big-O(logn)
