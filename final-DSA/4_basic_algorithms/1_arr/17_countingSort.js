function countingSort(arr) {

  // 1. Find the largest number
  let max = Math.max(...arr);
  
  let count = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  let output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    output[count[current] - 1] = current;
    count[current]--;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}

const arr = [3,4,3,4,2,2,44,3,5];

console.log(countingSort(arr))