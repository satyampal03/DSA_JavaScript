class Node {
    constructor(value){
        this.value = value;
        this.next = null;
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

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            // Fix 1: Link the new node to the old head
            node.next = this.head; 
            this.head = node; 
        }
        this.size++
    }

    print() {
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.head;
            // Fix 2: Use an empty string and append values
            let listValue = ''; 
            while(curr){ 
                listValue += `${curr.value} -> `; 
                curr = curr.next;
            }
            console.log(listValue + 'null'); // Prints something like: "22 -> 2 -> null"
        }
    }
}

const list  = new LinkedList();

console.log('is empty => ', list.isEmpty());
console.log('get list size => ', list.getSize());

list.prepend(2);
list.print(); // Output: 2 -> null

list.prepend(22);
list.print(); // Output: 22 -> 2 -> null
