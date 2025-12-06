const threeSumZero = function (nums){

      nums.sort((a, b) => a - b);
      let newArr = [];
 const result = [];
    const n = nums.length;

    // 2. Iterate through the array using 'i' as the first pointer.
    for (let i = 0; i < n - 2; i++) {
        
        // Skip duplicate 'i' elements to ensure unique triplets.
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // 3. Set up the two pointers for the remaining subarray.
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === 0) {
                // Found a valid triplet! Push it into the result array.
                result.push([nums[i], nums[left], nums[right]]);

                // 4. Skip duplicates for 'left' and 'right' pointers.
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move both pointers inward to find the next potential triplet.
                left++;
                right--;
            } else if (currentSum < 0) {
                // Sum is too small, need a larger number.
                left++;
            } else {
                // Sum is too large, need a smaller number.
                right--;
            }
        }
    }

    return result;
};

const arr = [-1, 0, 1, 2, -1, -4];


    //   left = 0;

    //   right = arr.length-1;

    //   while(left < right){

    //      if(arr[left-1] + arr[left] + arr[right] === 0){

    //         newArr.push(arr[left-1],arr[left], arr[right]);

    //      }
    //     if(arr[left-1] + arr[left] + arr[right] > 0){
    //       right--;
    //     } 
    //      if(arr[left-1] + arr[left] + arr[right] < 0){
    //       left++;
    //     } 
    //   }

    //   return newArr;

    


console.log(threeSumZero(arr));