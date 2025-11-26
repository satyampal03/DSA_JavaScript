// climbing stair case

function climbingStair(n){
    const noOfWays = [1,2];
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1]+ noOfWays[i-2]
    }
    return noOfWays[n-1];
}

console.log(climbingStair(5));

//  Time Complexity is O(n);
// Space Complexity is also o(n)