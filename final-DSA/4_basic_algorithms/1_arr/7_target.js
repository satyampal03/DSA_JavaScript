 const subarraySum = function (arr, target) {
        // code here

                for(let i=0; i<arr.length; i++){
            for(let j = i+1; j<arr.length; j++){
                if(arr[i] + arr[j]===target){
                    return [i, j]
                }
            }
        }

    //    let  left = 0;
    //    let  right = arr.length-1;
    //     while(left < right){
    //         if(arr[left] + arr[right] === target){
    //              return [left, right]
    //         }
    //         right--;
    //     }
    //     left++
    }

let arr = [1, 2,4, 7,1, 5,];
let target = 12;


console.log(subarraySum(arr, target));