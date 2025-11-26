function myfun(arr){
    for(let i = 0; i < arr.length; i++){

     let  numberInsert = arr[i];

     let j = i-1; // index of sorted elements
     while(j >= 0 && arr[j] > numberInsert){
        arr[j+1] = arr[j];
        j = j-1;
     }
     arr[j+1] = numberInsert;
    }
}
const arr = [4,2,4,34,5,3,5,32,1];
myfun(arr);
console.log(arr);


// Big-O => O(n^2)
// Time Complexity is O(N^2);