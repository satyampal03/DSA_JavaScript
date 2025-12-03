const newSet = new Set([2,3,54,3]);

// to add new value we can use .add method but we cannot add the duplicate values in the set but in the case of the aaray there we can add multiple times the calues 
// to check isAvailable or not -> .has(elm)


newSet.add('satyam');


for(let elm of newSet){
    console.log('this is ',elm);
}