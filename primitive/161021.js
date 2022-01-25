// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.speed = options.speed
//     }
//     run () {
//         console.log(`${this.name} бежит со скоростью ${this.speed}`)
//     }
// }
// class Cat extends Animal{
//     constructor(options) {
//         super(options) = options
//         this.tail = options.tail
//     }
//     run() {
//         console.log('cat run')
//         super.run()
//     }
//     get peopleAge() {
//         return this.age * 5
//     }

// }
// const tom = new Cat({name: 'Tom', age: 12, speed :11, tail: 'Black'})
// tom.run()


/*function  cacheFunc(paramVal) {
    let someVar = 0
    if(cacheFunc.cache) {
        console.log('return from cache',cacheFunc.cache)
        return cacheFunc.cache
    }
    for (let i = 0; i < 1000; i++){
        someVar += paramVal
    }
    console.log('calculated sum', someVar)
    cacheFunc.cac
    he = someVar
}
cacheFunc(20)
cacheFunc(20)*/


/*const seasons = {
    winter: 'winter',
    summer: 'summer',
    autumn : 'autumn',
    spring: 'spring',
    multi: 'multi'

}
const season = 'winter'
class Product  {
    constructor (options) {
        this.name = options.name
        this.standartPrice = options.standartPrice
        }
}

class Edible extends Product {
    constructor(options) {
        super(options)
        this.season = options.season
    }
    get price() {
        if (this.season.includes(seasons)  || this.season.includes(seasons.multi) ){
            return this.standartPrice
           
        }

        return this.standartPrice * 1.5
    }
    
}

const edibleProducts = [
    {
        name: 'Banana',
        standartPrice: 90,
        season: [seasons.multi]
    },
    {
        name: 'Bread',
        standartPrice: 90,
        season:  [seasons.multi]
    },
    {
        name: 'Apple',
        standartPrice: 90,
        season: [seasons.summer, seasons.spring, seasons.summer]
    },
    {
        name: 'Meat',
        standartPrice: 90,
        season:  [seasons.summer]
    },
    {
        name: 'Ice-cream',
        standartPrice: 90,
        season:  [seasons.multi]
    }
]
let goods = []
function sort() {
    for (let good of edibleProducts) {
    
    good = new Edible(good)
    goods.push(good)
    }
    return goods
} */

class Electro {
    constructor(good) {
        this.name = good.name
        this.energy = good.energy
        this.standartPrice = good.standartPrice
        this.workTime = good.workTime
    }
    get price() {
       return  this.standartPrice * this.workTime + this.energy
    }
     breakGood()  {
        return this.workTime = 0
    }
}

let phone = new Electro({name: 'iphone', energy: 2000, standartPrice: 100, workTime: 100})
console.log(phone.price)
 phone.breakGood()

console.log(phone.price)