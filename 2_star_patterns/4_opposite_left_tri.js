// oppposite left triangle using star pattern 

let num = 5
let strPattern = '';

for(let i = num; i >= 1; i--){
    for(let j = i; j >=1; j--){
        strPattern += '*';
    }
    console.log(strPattern);
    strPattern = '';
}