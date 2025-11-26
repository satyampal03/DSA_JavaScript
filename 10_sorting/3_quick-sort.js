// quick sort array algorithm

function myfun(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length-1]; // for the last array
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }

    return [...myfun(left), pivot, ...myfun(right)];

}

const arr = [3,4,2,-5,3,-7,6];

console.log(myfun(arr));
console.log(arr);


// worst case => O(n^2)