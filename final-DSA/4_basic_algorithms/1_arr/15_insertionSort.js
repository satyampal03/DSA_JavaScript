// insertion Sort
const arr = [ 7,14,11,3,3,34]

    for (let i = 1; i < arr.length; i++) {
        let insertInd = i;
        
        const removedElements = arr.splice(i, 1);
        const current_value = removedElements[0];

        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > current_value) {
                insertInd = j;
            }
        }arr.splice(insertInd, 0, current_value);
    }
console.log(arr);