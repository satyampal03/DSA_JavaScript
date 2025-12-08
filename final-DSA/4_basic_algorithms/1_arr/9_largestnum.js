const getLargestNum = function(arr){
     if(arr.length === 0) {
    return null; 
  }

  let largestNum = arr[0]; // Initialize with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) { // Compare current element with the largest found so far
      largestNum = arr[i]; // Update if a larger number is found
    }
  }

  return largestNum;
}

const arr = [34,5,6,45,4,74,67,4,6];
console.log(getLargestNum(arr));
