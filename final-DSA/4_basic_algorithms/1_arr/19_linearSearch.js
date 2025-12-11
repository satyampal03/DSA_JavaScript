function linearSearch(arr,target){
for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
        return i+1
    }
}

return -1;

}

const arr = [34,34,3,5,3,5,3,5,4]; 
 
const target = 4;

console.log(linearSearch(arr,target))