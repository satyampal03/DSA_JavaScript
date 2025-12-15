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
            this.head = node
        }

        this.size++;
   }

   print(){
    if(this.isEmpty()){
        console.log('List is Empty')
    }else{
        let curr = this.head;
        let listVal = '';
        while(curr){
            listVal += `${curr.value} `;
            curr = curr.next;
        }

        console.log(listVal);
    }
}






//    print(){
//     if(this.isEmpty()){
//         console.log('List is Empty');
//     }else{
//         let curr = this.head;
//         let listValue = '';
//         while(curr){
//             listValue += `${curr.value} `;
//             curr = curr.next;
//         }
//         console.log(listValue);
//     }

//    }
}


const list = new LinkedList()
list.prepend(40)
list.prepend(40)
list.prepend(40)

console.log('is empty => ', list.isEmpty());
console.log('get list size => ', list.getSize());

list.print();

/*class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size ===0;
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

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.head;
            let listValue = '';
            while(curr){ // when the value gets end it return null thne loop gets exits;
                listValue += `${curr.value} `;
                curr = curr.next;
            }

            console.log(listValue);
        }
    }
}


const list = new LinkedList();

list.prepend(10);
list.prepend(310);
list.prepend(130);
list.prepend(103);
console.log('is empty => ', list.isEmpty());
console.log('get list size => ', list.getSize());



list.print();

*/