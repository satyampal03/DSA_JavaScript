class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty){
        return this.items[0]
        }
    }

    size(){
        return this.items.length
    }

    print(){
        return console.log(this.items.toString())
    }

}


const item = new Queue()
item.enqueue(39)
item.enqueue(339)
item.enqueue(394)
item.enqueue(392)
item.enqueue(395)

console.log(item.isEmpty());
item.print()

console.log(item.size());
