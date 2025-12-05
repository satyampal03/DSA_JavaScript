const findMedianSortedArrays = function(nums1, nums2) {
        const x = [];    
        x.push(nums1,nums2);
       const newArr = x.flat();
         for(let i = 0; i<newArr.length; i++){
            for(let j = i+1; j<newArr.length; j++){
                if(newArr[i] > newArr[j]){
                let temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
                }
            }

            }
        console.log(newArr);

    if(newArr.length % 2 === 0){
        const mid = Math.floor(newArr.length/2);
        //  console.log(mid);
        return (newArr[mid]+newArr[mid-1])/2;
    }else{
        const mid = Math.floor(newArr.length/2);
        // console.log(mid);

         return newArr[mid];
    }
};

const nums1 = [3,4,5,3,5,3,5,3]
const nums2 = [4,45,6,7,8,6,2,6]

console.log(findMedianSortedArrays(nums1, nums2))

/*
// const findMedianSortedArrays = function(nums1, nums2) {

function myfunc(){
    const newArr = [1,2,3,4,5,6,7];   
        
    console.log("NEW ARR=> "+newArr);
        
        // newArr.push(nums1,nums2);
        // newArr.flat(1)
        // for(let i = 0; i<newArr.length-1; i++){
        //     for(let j = i+1; j<newArr.length-1; j++){
        //         let temp = newArr[i];
        //         newArr[i] = newArr[j];
        //         newArr[j] = temp;
        //     }
        // }
        let mid = 0;
    if(newArr.length % 2 === 0)
    {
         mid = newArr.length/2;
          console.log("EVEN - MID=> " +((newArr[mid]+newArr[mid-1])/2))
        return (newArr[mid]+newArr[mid+1])/2
    }
    else
    {
         mid = Math.floor(newArr.length/2);
         console.log(mid)
           console.log("ODD -> MID => "+(newArr[mid]))
         return newArr[mid];
    }
};

myfunc();

*/