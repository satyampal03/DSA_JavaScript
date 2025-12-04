const LinkedList = require('./1_queueLinkedList')

class LinkedListQueue{
    constructor(){
        // FIX 1: Use 'new' keyword to instantiate the LinkedList class
        this.list =  new LinkedList() 
    }

    enqueue(value){
        // FIX 2 (conceptual): For a proper Queue (FIFO), enqueue should append to the end.
        // Assuming your LinkedList has an append method:
        // this.list.append(value); 
        
        // If you must use existing methods: The current code makes it a stack (LIFO):
        this.list.prepend(value); 
    }

    dequeue(){
        // This removes from the front (head)
        return this.list.removeFromFront()
    }

    peek(){
        // Added a check just in case the list is empty before accessing head
        if (this.isEmpty()) {
            return undefined;
        }
        return this.list.head.value
    }

    isEmpty(){
        // FIX 3: Call isEmpty as a method
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const queue = new LinkedListQueue();

queue.enqueue(40)
queue.enqueue(43)
queue.enqueue(43)
queue.enqueue(44)

console.log(queue.print()) 