class Node{
    constructor(value){
        this.value = value;
        this.next = null
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
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(index,  value){ // insert at index with value;
        if(index > this.size || index < 0){
            return // if this condition works then retuen the undefined output
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i< index-1; i++){
                prev = prev.next;
            }
            node.next =  prev.next;
            prev.next = node;
            this.size++;
        }
    }   

    removeFrom(index){ // remove the node using the index 
        if(index > this.size || index < 0){
            return null  
        }

        let removeFrom; // this is the common variable for both of them

        if(index === 0){
            removeFrom =  this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i = 0; i< index-1; i++){
                prev = prev.next;
            }
            removeFrom = prev.next;
            prev.next = removeFrom.next;
        }

        this.size --;
    }

    remove(value){
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
                prev = prev.next
            }
            if(prev.next){
            const removeFrom = prev.next;
            prev.next = removeFrom.next;
            this.size--;
            return value
            }
            return null
        }
        
    }




    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let current = this.head;
            let listValue = '';
            while(current){
                listValue += `${current.value}`;
                current = current.next;
            }
            console.log(listValue);
        }

    }

}