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
        return this.size ===0;
    }

    getSize(){
        return this.size
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
        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(index, value){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i< index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next= node;
            this.size++
        }
    }

    removeForm(index){
        if(index<0|| index> this.size){
            return null;
        }
        let removeFrom;
        if(index ===0){
            removeFrom = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head;
            for(let i =0; i<index -1; i++){
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
            this.head = this.next
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                const removeFrom = prev.next;
                prev.next = removeFrom.next
                this.size--;
                return value;
            }
            return null
        }
    }


    search(value){
        if(this.isEmpty()){
            return null;
        }

       let i = 0;
       let current = this.head;
        while(current.value === value){
            return i;
        }
        current = current.next;
        i++;
    }

 // understand again you don't catch it still;
    reverse(){
        let prev = null;
        let current = this.head;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    print(){
        if(this.isEmpty()){
            console.log(' List is Empty')
        }else{
            let current = this.head;
            let listValue = '';
            while(current){
                listValue +=  `${current.value}-->`
                current = current.next;
            }
            console.log(listValue);
        }
    }
}

const list = new LinkedList();

list.prepend(425);
list.prepend(4534);
list.prepend(4345);
list.prepend(445);
list.prepend(4545);
list.prepend(455);

list.append(307);

list.insert(1, 2222222);

list.removeForm(2);
console.log(list.getSize());

list.remove(4534);

console.log(list.getSize());

list.search(5);

list.reverse();

list.print()