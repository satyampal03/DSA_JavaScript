const getAlternative = function(arr){
    let newArr = [];
    for(let i =0; i<arr.length; i +=2){
    newArr.push(arr[i]);
}
    return newArr
}

let arr = [2,4,23,5,34,6,435,6,34,6,4];


console.log(getAlternative(arr));