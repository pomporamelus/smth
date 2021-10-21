class Message {
    constructor(message) {
        this.message = message
    }
    increaseMsg (param = 'I') {
        return  function (param1) {
             return param += param1
        }
    }
}
let mymsg = new Message('hello')
let a = mymsg.increaseMsg()
console.log(a(' am programmer.'))
console.log(a(' Are you programmer too?'))

/*class Laptop {
    constructor(options) {
        this.name = options.name
        this.age = options.age
    }
    get price() {
        return this.name === 'mac' ? 2000 : 1000
    }
    set name(name) {
        if(name === 'lenovo') {
            console.log('yes')
        }
    }
}

const obj = new Laptop({name: 'lenovo', age:11})
console.log(obj.price) */
let sum = 0
class Laptop {
    constructor(name , details = new Detail()) {
        this.name = name
        this.details = details
    }
     get Price() {
         for (let a of this.details) {
          sum += a.price
         }
         return sum
     }

     }

class Detail {
    constructor (obj){
        this.name = obj.name
        this.price = obj.price
}
}

let mac = new Laptop('mac16' ,  [new Detail({name: 'cpu', price: 25000}),
new Detail({name: 'videocard', price: 50000}),
new Detail({name: 'powerBlock', price: 25000})])
console.log(mac)
console.log(mac.Price)


