function targetNum(arr, target){
    //     if(arr.length === 0){
    //     return -1
    // }
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    while(leftIndex <= rightIndex){   // while the left index is less then the right index, or equal to right index 
        let middle_index = Math.floor((leftIndex+rightIndex)/2);

        if(target === arr[middle_index]){
            return middle_index;
        }
        if(target < arr[middle_index]){
            rightIndex = middle_index-1;
        }else{
            leftIndex = middle_index+1;
        }
    }
    return 'hey';
}

console.log(targetNum([-5, 2, 4, 6,10], 4));


// big-O => O(logn);

// space complexity is O(1); => constant
