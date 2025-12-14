class Node{
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
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // append
    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
              prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    
    insert(value, index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }

    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.head;
            let listVal = '';
            while(curr){
                listVal += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listVal)
        }
    }
}


const list = new LinkedList();

list.prepend(320);
list.append(110);
list.prepend(13);
console.log('is empty => ', list.isEmpty());
console.log('get list size => ', list.getSize());

list.insert(40,3);
list.print();