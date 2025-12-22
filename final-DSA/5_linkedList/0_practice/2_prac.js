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

    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    insert(index, value){
       if(index > this.size || index < 0){
        return 
       }
       if(index === 0){
        this.prepend(value);
       }else{
        const node = new Node(value);
        let prev = this.head;
        for(let i = 0; i<index-1; i++){
            prev = prev.next;
        }
           node.next = prev.next
           prev.next = node;
           this.size++;
       }

    }

    deleteFrom(index){
        if(index < 0 || index > this.size){
            return null;
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i = 0; i < index -1; i++){
                 prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
    }

    delete(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }

            if(prev.next){
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
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

    reverse(){
        let prev = null;
        let current = this.head;
        while(current){
            let next = current.next;
            prev = current
            current = next;
        }
        this.head = prev;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let current = this.head;
            let listValue = '';
            while(current){
                listValue += `${current.value} ====> `;
                current = current.next;
                console.log(current);
            }
           console.log(listValue);
        }
    }
}

const list = new LinkedList();

list.prepend(40);
list.prepend(40);
list.prepend(40);
list.prepend(40);
list.prepend(40);
list.prepend(4443);

list.append(555);


console.log(list.isEmpty())
console.log(list.getSize())

list.print();