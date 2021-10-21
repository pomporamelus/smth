// function UserConstructor (name,age,gender) {
//     return {
//         name,
//         age,
//         gender,
//     }
// }
// let user = UserConstructor ('Max', 32, 'male')
// console.log(user)

// function UserFactory (name,age, gender) {
//     // this = {};
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     // return this
// }
// let user2 = new UserFactory('Marry', 32, 'female')
// console.log(user2)

/*class Car {
    constructor(name, speed , price) {
        this.name = name;
        this.speed = speed;
        this.price = price;
        this.isActive = true;
    }

    changeActive() {
       this.isActive = !this.isActive;
       this.isActive ?  console.log('Завелась') : console.log('Выключилась')
    }
}
const bmw = new Car('bmw', 240, 9000)
console.log(bmw)
bmw.changeActive()
bmw.changeActive() */

class Robot {
    constructor(name,model,power) {
        this.name = name;
        this.model = model;
        this.power = power
        this.isON = false
    }
     fire() {
        console.log('Вижу врага... Начинаю огонь')
    } 
}
// let optimus = new Robot('Optimus', 'ght 5000', 10000)
// console.log(optimus)
// optimus.fire()

/*class PremiumCar extends Car {
    constructor(name,speed, price,type) {
        super(name,speed,price,type)
        this.type = type
    }
}
const porche = new PremiumCar ('Porche', 310 , 20000 , 'Premium')
console.log(porche) */

class Autobots extends Robot {
    constructor(name,model,power) {
        super(name,model,power) 
    }
    drive () {
        console.log('Трансформируюсь в машину')
    }
}
let optimus = new Autobots('Optimus', 'pdg 2000', 10000)
console.log(optimus)
optimus.drive()


class Desepticon extends Robot {
    constructor(name,model,power) {
        super(name,model,power) 
    }
    fly () {
        console.log('Трансформируюсь в самолёт')
    }
}
let megatron = new Desepticon('Megatron', 'ddh 2000', 9000)
console.log(megatron)
megatron.fly()

