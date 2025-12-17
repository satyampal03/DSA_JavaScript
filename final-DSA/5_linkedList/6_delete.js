class Node{ // this is the linked list node that is only generates the each an every node, when we create anyhere
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{ // this is linkedlist class
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){ // this will return is liked list is empty or not?
        return this.size === 0;
    }

    getSize(){ // this will return the size of the linkedlist
        return this.size;
    }

    prepend(value){ // this will add the new node at the first postion of the lisnkedList
        const node = new Node (value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){ // this will addd the new node at the end of the linked list
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = this.next
            }// after ending this loop we will get reached at the end of the linkedlist
            prev.next = node;

        }
    }

        insert(value, index){
            const node = new Node(value)
            if(index < 0 || index > this.size){
                return
            }
            if(index ===0){
                this.prepend(value)
            }else{
                let prev = this.head;
                for(let i = 0; i<index-1; i++){
                    prev = prev.next;
                }// will reach 1 prev to the index index will hold at the postion of after previous index value
                node.next = prev.next;
                prev.next = node;
                this.size++;
            }
        }

        removeFrom(index){
            if(index < 0 || index >= this.size){
                return null
            }
            let removeNode;
            if(index === 0){
                removeNode = this.head;
                this.head = this.head.next;
            }else{
                let prev = this.head;
                for(let i=0; i<index-1; i++){
                    prev = prev.next;
                }
                removeNode = prev.next;
                prev.next = removeNode.next;
            }
        }

        removeValue(value){
                if(this.isEmpty()){
                    return null
                }
                 if(this.head.value === value){
                    this.head = this.head.next;
                    this.size--;
                    return value;
                 }
        }


    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let current = this.head;
            let listValue = '';
            while(current){
                listValue += `${current.value} `;
                current = current.next;
            }
        console.log(listValue);
        }
    }
}



const list = new LinkedList();

list.print();
list.prepend(20);
list.prepend(2324);
list.prepend(20);
list.prepend(20);

list.removeFrom(1);
list.removeFrom(1);
list.print();
