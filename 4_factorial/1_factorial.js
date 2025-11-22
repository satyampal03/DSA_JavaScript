function fac(n){

    let factorial = 1;

    for(let i = 1; i<=n;i++){
        factorial *= i;
    }

    console.log(factorial);
}

fac(99999);

// Big -O => O(n); Linear num of n increases, also line no.6 is increases