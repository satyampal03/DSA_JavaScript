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

    // time Complexity O(1) ==> linear
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            // The original code assigned 'this.node = this.head;', which created a 
            // new property 'node' on the LinkedList instance but didn't link the nodes.
            // We need to set the new node's 'next' property to the current head.
            node.next = this.head; // Correct linking
            this.head = node; // Update the head to the new node
        }

        this.size++
    }

    // time Complexity O(n) ==> linear
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
        this.size++
    }
/*
    insert(value, index){
        if(index < 0 || index >this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            const prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    */

    insert (value, index) {
  if(index < 0 || index > this.size) {
    return
  }
  if(index== 0) {
    this.prepend (value)
  } else {
    const node = new Node (value)
    let prev = this.head
    for(let i=0; i < index-1; i++) {
      prev = prev.next
    }
    node.next = prev.next
    prev.next = node
    this.size++
  }
}

    removeFrom(index){
        if(index < 0 || index >= this.size) {
            return null
        }
        let removeNode
        if(index ===0 ){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0; i< index-1; i++){
                prev  = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
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
        let cur = this.head
        while(cur){
            if(cur.value === value){
                return i
            }
            cur = cur.next
            i++
        }
        return 'product is not Found';
    }

   reverse(){
        let prev = null;
        let cur =  this.head
        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }


    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let cur = this.head;
            let listValues = '';
            while(cur){
                listValues += `${cur.value} => `; // Added arrow for better readability
                cur = cur.next;
            }
            // Remove the trailing arrow and space for cleaner output
            console.log(listValues.slice(0, -4)); 
        }
    }
}

const box = new LinkedList();


console.log('box khali hai ?', box.isEmpty());
console.log('box ka size ?', box.getSize()); 
// box.prepend(4); // You can uncomment this line
box.prepend(14);
box.prepend(44);
box.prepend(34);
box.prepend(12);
box.prepend(22); // Changed second 14 to 24 to better illustrate list order

// box.removeValue(14);
// box.print();
// console.log(box.search(1));
box.reverse();
box.print();

