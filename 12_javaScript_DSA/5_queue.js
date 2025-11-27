class Queue {
    constructor(){
        this.itmes = []
    }
    enqueue(element){
        this.itmes.push(element)
    }
    dequeue(){
        return this.itmes.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.itmes[0]
        }
        return null
    }
    size(){
        return this.itmes.length
    }
    print(){
        console.log(this.itmes.toString())
    }
}

const queue = new Queue ()
// console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(2)
queue.enqueue(130)
queue.enqueue(104)
console.log(queue.size);
queue.print();