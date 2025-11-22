// creating a simple sqr using the star pattern
let length = 5
let strPattern = '';

for(let i = 1; i<=length; i++

){
    // console.log('*');
    for(let j = 1; j <=length; j++){
    strPattern += '*'
    }
    console.log(strPattern);
    strPattern = '';
}
