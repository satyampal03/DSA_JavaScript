const obj1 = {
    name : 'satyam',
    age : 20,

    'key-pair': true
}

console.log(obj1.name);
console.log(obj1.age);
// console.log(obj1."key-pair");  not possible because key name is with string and so this is not possible to happen like this
console.log(obj1["key-pair"]);


const obj = {
  name: 'Heisenberg',
  age: 25,
  "key-three": true,
  sayMyName: function() {
    console.log(this.name)
  }
}
obj.hobby = 'football'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()

//Object.keys() .values() .entries()