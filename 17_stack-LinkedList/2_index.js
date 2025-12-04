const LinkedList = require('./1_linkedList');

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront();
    }

    peek(){
        this.list.head.value
    }

    isEmpty(){
        this.list.isEmpty
    }

    getSize(){
        this.list.getSize
    }

    print(){
        this.list.size
    }
}



const container = new LinkedListStack()


container.push(4)
console.log(getSize())