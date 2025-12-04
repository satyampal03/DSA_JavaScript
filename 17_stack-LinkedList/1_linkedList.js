class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let cur = this.head;
            let listValues = '';
            while(cur){
                listValues += `${cur.value} -----> `; // Added arrow for better readability
                cur = cur.next;
            }
            // Remove the trailing arrow and space for cleaner output
            console.log(listValues.slice(0, -4)); 
        }
    }


    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
           let prev = this.head
           while(prev.next !== this.tail){
            prev = prev.next
           } 
           prev.next = null;
           
           this.tail = prev

        }
        this.size--
        return value
    }
}
const container = new LinkedList();


console.log('box khali hai ?', container.isEmpty());
console.log('box ka size ?', container.getSize());


container.prepend(50);
container.prepend(550);
container.prepend(550);
container.prepend(505);
container.prepend(550);
container.prepend(550);

container.print();
