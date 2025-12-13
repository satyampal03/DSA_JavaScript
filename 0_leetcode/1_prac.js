const removeElem = function(arr, val){
for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
        arr.splice(i,1);
        i--;
    }
}
return arr;
}

const arr = [3,4,34,5,3];
const val = 34;

console.log(removeElem(arr, val));