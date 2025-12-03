// circular queue

class CircularQueue{
    constructor(capasity){
        this.items = new Array(capasity)
        this.capasity = capasity;
        this.currentLength =  0;
        this.rear = -1 // now position any in queue so we use here :-1
        this.front = -1 // same here
    }
    isFull(){
        return this.currentLength === this.capasity;
    }
    isEmpty(){
        return this.currentLength === 0;
    }

   enqueue(element) {
        // Added parentheses to call the function correctly
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1; // Used currentLength consistently
            // Simplified the front pointer initialization
            if (this.front === -1) { // Check for -1 instead of 1
                this.front = this.rear;
            }
        } else {
             console.log("Queue is full, cannot enqueue " + element);
        }
    }

    dequeue() {
        // Added parentheses to call the function correctly
        if (this.isEmpty()) {
            return null;
        }

        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1; // Used currentLength consistently

        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }

    peek() {
        // Added parentheses to call the function correctly
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let str = '';
            // The loop condition is correct for circular queues
            for (let i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[this.rear]; // Print the rear element after the loop finishes
            console.log(str);
        }
    }
}

const queue = new Queue(5);
console.log("Is queue empty?", queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Is queue full?", queue.isFull());
console.log("Queue contents:");
queue.print(); 

// Example usage of dequeue to show circular nature
queue.dequeue(); 
queue.enqueue(60); 
console.log("Queue contents after dequeue and new enqueue:");
queue.print();