const twoSum = function(nums, target) {
    const newArr = [];
    //  O(n^2) =>
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                newArr.push(i,j);
            }
        } 
    }
    return newArr;

/*
// faster then previous
   let  left = 0;
   let  right = nums.length-1;

    while(left < right){
        if(nums[left] + nums[right] === target){
            newArr.push(left, right);
        }
        left++;
    }
    right--;
    return newArr;
    */
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target));