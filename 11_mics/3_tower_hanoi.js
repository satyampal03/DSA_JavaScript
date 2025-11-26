// Tower of Hanoi

function towerHanoi(n, fromRod, toRod, usingRod){
    if(n ===1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerHanoi(n-1, usingRod, toRod, fromRod);
}

towerHanoi(3, 'A', 'C', 'B');