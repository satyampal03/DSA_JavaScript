function binarySearch(arr, target){
    
    arr.sort((a,b) => a-b);
    
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let midIndex = Math.floor((left+right)/2);
        if(target === arr[midIndex]){
            return midIndex;
        }
        if(target < arr[midIndex]){
            right = midIndex-1;
        }else{
            left = midIndex+1;
        }
    }
    return -1;
}

const arr = [34,34,3,5,3,5,3,5,4]; 
 
const target = 34;

console.log(binarySearch(arr, target));