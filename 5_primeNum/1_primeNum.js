// Find 'n' is prime no or not?

function prime(n){
 if(n<2){
    return false; 
 }
for(let i = 2; i<= Math.sqrt(n); i++){
    if(n % i === 0){
        return false;
    }
    
}
return true;

}

console.log(prime(1)); // Prime
console.log(prime(2)); // Prime 
console.log(prime(3)); // Prime
console.log(prime(4)); // Not Prime






// function prime(n){
//  if(n<2){
//     return false; // because 2 is initial number of to get prime number also cheching for the -ve values 
//  }
// for(let i = 2; i<n; i++){
//     if(n % i === 0){
//         return false;
//     }
    
// }
// return true;

// }

// console.log(prime(1)); // Prime
// console.log(prime(2)); // Prime 
// console.log(prime(3)); // Prime
// console.log(prime(4)); // Not Prime

// // Big-O(n) => Linear Time Complexity