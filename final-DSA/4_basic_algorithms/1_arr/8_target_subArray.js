   const subarraySum= function(arr, target) {
        // code here
        
        for(let i= 0; i<arr.length-1; i++){

        let sum = 0;

            for(let j=i; j<arr.length; j++ ){
                
                sum += arr[j]
                if(sum === target){
                    return [i+1,j+1];
                    }
                }
                sum = 0;
                
            }



            
            
            
    }

let arr = [12, 18, 5, 11, 30,5];
let target = 69;


console.log(subarraySum(arr, target));


