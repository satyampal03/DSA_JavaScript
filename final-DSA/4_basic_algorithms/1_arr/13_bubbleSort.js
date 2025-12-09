// bubble Sort
const arr = [ 7,14,11,8,9]

for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length-i-1; j++){
      if(arr[j] > arr[j+1]){
         let initial = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = initial;
      }
    }
  }
console.log(arr);

// bubble sort starts sorting from the right to lekft
