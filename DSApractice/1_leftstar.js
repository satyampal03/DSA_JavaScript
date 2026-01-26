function triangle(rows){
    for(let i = 1; i <= rows; i++){

        let starsRow = '';
        for(let j = 1; j <= i; j++){
            starsRow += '*';
        }
        console.log(starsRow);
    }
}

triangle(7)