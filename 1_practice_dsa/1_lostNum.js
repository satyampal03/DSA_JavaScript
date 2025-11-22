// find the lost number within this arr
// approaches
//  highestNum =  N 
// Expect Sum = N*(N + 1) / 2
// subtract the sum of all elements from x;

const arr = [1,2,3,4,5,7,8,9];
let sum = 0;
let highestNum = 0;
arr.forEach(elem => {
    sum += elem;
        elem > highestNum ? highestNum = elem : highestNum = highestNum;
});

console.log(sum);
console.log(arr.length * ((arr.length+1) + 1) / 2);
console.log(arr.length+1);
console.log('this is the heighest nim',highestNum);

// final answer =>
const lostNum =  (highestNum*(highestNum+1)/2) - sum;
console.log('Lost Num in Array => ', lostNum);