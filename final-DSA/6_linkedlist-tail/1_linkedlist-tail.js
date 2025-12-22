class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        if(this.isEmpty()){
            console.log('list is Empty');
        }else{
            let current = this.head;
            let listValue = '';
            while(current){
                listValue += `${current.value} ===>`;
                current = current.next;
            }
            console.log(listValue);
        }
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
         this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront(value){
        
    }
}