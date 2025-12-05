/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    for(let i=0; i<height.length; i++){
        for(let j = i+1; j<height.length; j++){
             let minWidth = j-i;
            let minHidth = Math.min(height[i], height[j]);

            let area = minWidth*minHidth;   
            if(area> maxArea){
                maxArea = area;
            }
        }
    }
    return maxArea;
};

const height = [853]
console.log(maxArea(height));
