/*class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name
    }
    run(speed) {
        this.speed = speed
        console.log(`${this.name}  бежит со скоростью ${this.speed}`)
    }
    stop() {
        this.speed = 0
        console.log(`${this.name} стоит`)
    }
}

class Homosapiens extends Animal {
    whoTam() {
        console.log('Привет меня зовут:', this.name)
    }
}
const person = new Homosapiens('Oleg')
person.run(21)
person.whoTam() */

/*function machine(obj) {
    this.powered = false
    this.on = function() {
        this.powered = true
        console.log('машина заведена')
    }
    this.off = function() {
        this.powered = false
        console.log('машина заглушена')
    }
}

function coffeeMachine(model) {
    machine.call(this)
    coffeeMachine.prototype = machine
    this.model = model
    this.getModel = function() {
        console.log(this.model)
    }
}
let a = new coffeeMachine('fhg21')
a.on()
function getName() {
    console.log(this,this.name)
}
const user = { name: 'Harry'}
getName.call(user) */
//map
const employee = {
    name: 'Dalores',
    age: 31,
    job: 'Google'
}
const entries = [
    ['name','Bob'],
    ['age', 23],
    ['job', 'Lalafo']
]
//  console.log(Object.entries(employee))
//  console.log(Object.fromEntries(entries))
 const user = new Map(entries) //можно ключом сделать объект
user.set('isAdmin', true) 
user.delete('job') 
console.log(user)
for ([key, val] of user) {
    console.log(val)
}

for ([key, val] of Object.entries(employee)) {
    console.log(val)
}
//console.log(employee)


//set

const numbers = [1, 2, 3, 4, 5, 6, 2, 1, 3, 4]
const uniqueNumbers = new Set(numbers)
//console.log(uniqueNumbers)
uniqueNumbers.add(32)
//console.log(uniqueNumbers.entries())

// const carPark = {
//     type: 'standart',
//     cars: [
//         {
//             name: 'bmw',
//             speed: 221
//         },
//         {
//             name: 'mers',
//             speed: 221
//         },
//         {
//             name: 'audi',
//             speed: 221
//         },
//         {
//             name: 'gelik',
//             speed: 221
//         },
//         {
//             name: 'subaru',
//             speed: 221
//         },
//     ]
// }
// for (key of carPark.cars) {
//     console.log(key.name)
// }

// const week = {
//     "monday": {
//         lessons: [
//             {
//                 name: 'math',
//                 teacher: 'bekbolotov',
//                 auditory: 230,
//             },
//             {
//                 name: 'biology',
//                 teacher: 'narimanovna',
//                 auditory: 210,
//             },
//             {
//                 name: 'psyhologi',
//                 teacher: 'borisov',
//                 auditory: 110,
//             },
//         ]
//     },
//     "tuesday": {
//         lessons: [
//             {
//                 name: 'pe',
//                 teacher: 'valeriev',
//                 auditory: 101,
//             },
//             {
//                 name: 'geometry',
//                 teacher: 'bekbolotov',
//                 auditory: 230,
//             },
//             {
//                 name: 'psyhologi',
//                 teacher: 'borisov',
//                 auditory: 110,
//             },
//         ]
//     },
//     "wednesday": {
//         lessons: [
//             {
//                 name: 'math',
//                 teacher: 'bekbolotov',
//                 auditory: 230,
//             },
//             {
//                 name: 'biology',
//                 teacher: 'narimanovna',
//                 auditory: 210,
//             },
//             {
//                 name: 'pe',
//                 teacher: 'valeriev',
//                 auditory: 101
//             },
//         ]
//     },
//     "thursday": {
//         lessons: [
//             {
//                 name: 'english',
//                 teacher: 'toktogulovna',
//                 auditory: 255,
//             },
//             {
//                 name: 'kyrgiz',
//                 teacher: 'turatbekovna',
//                 auditory: 210,
//             },
//             {
//                 name: 'math',
//                 teacher: 'bekbolotov',
//                 auditory: 230,
//             },
//         ]
//     },
// }

// function showShcedule(obj) {
//     for(let a of obj){
//     if (a == "monday") {
//         for (key of week.monday.lessons) {
//             console.log('Предмет: ', key.name)
//             console.log('Учитель: ', key.teacher)
//             console.log('В кабинете: ', key.auditory)
//         }
//     }
// }
// }
// console.log(showShcedule(week))
// console.log('В понедельник: ' , )