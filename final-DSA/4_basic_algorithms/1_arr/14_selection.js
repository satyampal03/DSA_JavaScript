// selection Sort
const arr = [ 7,14,11,3,3,34]

for(let i = 0; i < arr.length; i++){
    for(let j = i; j<arr.length; j++){
      if(arr[i]>arr[j]){
        let key = arr[i];
        arr[i] = arr[j];
        arr[j] = key;
      }
    }
}

    console.log(arr);

//selection sort sort from the left to right,
/*
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
*/