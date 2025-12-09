// bubble Sort
const arr = [ 7,14,11,8,9]

for(let i = 0; i<arr.length-1; i++){
    for(let j = 0; j<arr.length-1-i; j++){
      if(arr[i] > arr[j+1]){
         let initial = arr[i];
         arr[i] = arr[j+1];
         arr[j+1] = initial;
      }
    }
  }
console.log(arr);