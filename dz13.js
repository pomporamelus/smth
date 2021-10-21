//Задание 1
let arr = []
class Car {
    constructor(name, speed, color, details) {
        this.name = name
        this.speed = speed
        this.color = color
        this.details = arr
    }
} 
class Detail {
    constructor (name, type, power){
        this.name = name
        this.type = type
        this.power = power
        return arr.push(this)
    }
     
}
class DriftCar extends Car {
    constructor(name, speed, color, hasTune) {
        super(name, speed, color)
        this.name = name
        this.speed = speed
        this.color = color
        this.hasTune = true
    }
    drift () {
        console.log('Дрифт.....')
    }
} 
let car = new Car('bmw',120,'blue')
new Detail('motor','xg 200',5000)
new Detail('generator','h3',10000)
new Detail('controlBlock','afd 10',1500)

console.log(car)
let car1 = new DriftCar('porshe',250,'green')

console.log(car1)
car1.drift()
//Задание 2
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    breathe() {
        return 'Дышу'
    }
    sleep(){
        console.log('Сплю')
        
    }
}
class WildAnimal extends Animal {
    constructor(name,age){
        super(name,age,Animal.breathe)
        this.name = name
        this.age = age
        this.isHungry = true
    }
     breathe() {
        console.log(super.breathe() + ` ${this.name}`)
     }
}
let monkey = new Animal('monkey', 4)
console.log(monkey)
let tiger = new WildAnimal('tiger',5)
console.log(tiger)
tiger.breathe()

