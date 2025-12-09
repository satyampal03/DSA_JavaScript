// bubble Sort
const arr = [ 7,12,9,11,3 ]

for(let i = 0; i<arr.length; i++){
    for(let j = i; j<arr.length; j++){
      if(arr[i] > arr[j]){
         let initial = arr[i];
         arr[i] = arr[j];
         arr[j] = initial;
      }
    }
  }

console.log(arr);