function fibnocci(n){
    num = [0,1]; // Defined Manually

    for(let i= 2; i < n; i++){
        num[i] = num[i-1]+ num[i-2]; // num array update ho rha hai
    }
    return num;
}

// console.log(fibnocci(2));
console.log(fibnocci(3));


// Big O-(N); Time Complexity is (No. of input  == time loop runs )