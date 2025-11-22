// creating the psyramid using the star pattern

let num = 3;


for(let i = 1; i <= num; i++){
let strPattern = '';

    for(let j = 1; j<= num-1; j++){
        strPattern += ' ';

    }
    // stars
    for (let k = 1; k <= 2*i - 1; k++) {
        strPattern += '*';
        
    }

    console.log(strPattern);

  strPattern += "\n";    //new line after row completion
    
}

// for (let i = 1; i <= n; i++) {
//     let pattern = "";

//     // spaces
//     for (let s = 1; s <= n
//          - i; s++) {
//         pattern += " ";
//     }

//     // stars
//     for (let j = 1; j <= 2*i - 1; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }

