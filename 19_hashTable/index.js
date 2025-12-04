class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0;
        for(let i = 0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        // FIX: The index MUST be within the bounds of the array size
        return total % this.size; 
    }
    // ... (set, get, remove methods remain the same but now use bounded indexes)
    set(key, value){
        const index  = this.hash(key)
        // this.table[index] = value

        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItems = bucket.find(itme => itme[0] === key)
            if(sameKeyItems){
                sameKeyItems[1] =value;
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index  = this.hash(key)
        // return this.table[index]
          const bucket = this.table[index]
        if(bucket){
            const sameKeyItems = bucket.find(itme => itme[0]===0)
            if(sameKeyItems){
                return sameKeyItems[1]
            }
        }

            return undefined
    }

    remove(key){
        const index  = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItems = bucket.find(item => item[0]===key)
            if(sameKeyItems){
                bucket.slice(bucket.indexOf(sameKeyItems),1)
            }
        }
    }


    display(){
        for(let i = 0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
        // This function is meant to display things, no return needed.
    }
}

const table = new HashTable(50);

// Remove console.logs around set operations
table.set('in','india');
table.set('jp','japan');
table.set('aus','australia');

// Remove console.log around display operation
table.display();