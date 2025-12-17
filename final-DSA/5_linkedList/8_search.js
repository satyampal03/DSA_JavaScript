class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i = 0;
        let current = this.head;
        while(current){
            if(current.value === value){
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
}