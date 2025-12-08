function findMissingNumber(arr) { 
    let n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    
    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += arr[i];
    }
    
    return expectedSum - actualSum;
} 

const myArray = [0, 1, 3]; 
console.log(findMissingNumber(myArray));