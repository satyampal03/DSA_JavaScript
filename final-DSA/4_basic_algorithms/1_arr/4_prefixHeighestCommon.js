

// strs = ["flower","flow","flight"]

// let commonPrefix = '';

// for(let i = 0; i<strs.length; i++){
// let word = strs[i];
// console.log(word);
//   for(let j = i+1; j<word.length; j++){
//     let leter = word.charAt[i];
//         console.log(leter)
//   }
// }


const longestCommonPrefix = function(strs) {
    // If the array is empty, the common prefix is an empty string
    if (strs.length === 0) {
        return "";
    }

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            
            if (strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }

    return strs[0];
};

const strs = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strs);

console.log(commonPrefix);