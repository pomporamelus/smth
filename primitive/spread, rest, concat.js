// spread === ..., rest , concat(Нужно использовать let для перезаписи)
// лучше spread чем concat
const numbers = [1,2,3,4,5]
const letters = ['a','b','c','d','e']
const symbols = ['&','-','+','/','*']

//const arr1 = [  , letters, symbols]
//console.log(arr)

/*const arr2 = []
function pushItems(arr = [], items = []) {
    for (let item of items) {
        arr.push(item)
    }
}
pushItems(arr2,numbers)
pushItems(arr2, letters)
pushItems(arr2, symbols)
console.log(arr2) */

/*const arr3 = [...numbers, ...letters]
arr3.push(...symbols)
console.log(arr3)*/

/*let arr4 = numbers.concat(letters)
arr4 = arr4.concat(symbols)
console.log(arr4)*/

/*let a = 10
let b = 20
let c = a
a = b
b = c
console.log( a , b) */

// const num1 = [1,2,3,4,5]
// const num2 = num1
// console.log(num1, num2, num1 == num2) //особенно
// num1.push(6,7,8)
// console.log(num1, num2, num1 == num2)


/*const person1 = {
    name: 'Adilet',
    age: 20,
    job: 'JS insructor'
}
const person2 = person1 // js не может просто копировать непримитивные типы данных
person2.name = 'Andrey'

console.log(person2)
console.log(person1)*/

/*const person1 = {
    name: 'Adilet',
    age: 20,
    job: 'JS insructor'
    test: {a:10, b:20}                          // не зависит от вложенности
}
// JavaScript Object Notation
const person2 = JSON.parse(JSON.stringify(person1)) // обязательно запомнить
person2.name = 'Andrey'
person2.test.b = 50

console.log(person1, typeof person1)
console.log(person2, typeof person2) */


// const person1 = {
//     name: 'Adilet',
//     age: 20,
//     job: 'JS insructor',
//     test: {a:10 , b:20}
// }

// const person2 = {...person1}
// person2.name = 'Andrey'
// person2.test.b = 50

// console.log(person1) 
// console.log(person2)

const person1 = {
    name: 'Adilet',
    age: 20,
    job: 'JS insructor',
}
const person2 = {
    hobby: 'volleyball',
    birthday : '19 - 05',
    age: 21
}
const person3 = {...person1, ...person2}
console.log(person3)
// Object.assign(person1, person2) // добавление в person1  
// console.log(person1)


/*function sum() {
    //console.log(arguments) // в стрелочных функциях нет arguments
    return Object.values(arguments)
    .filter(item => item == +item)
    .reduce((a, b) => +a + +b)
}

console.log(sum(2, 3, 4, 5, 6, 'd', '20'))*/


/*function sum(...items ) {
    if (items.length < 1) { return 0}
    return items
    .filter(item => item == +item)
    .reduce((a, b) => +a + +b)
}

console.log(sum(2, 3, 4, 5, 6, 'd', '20')) */