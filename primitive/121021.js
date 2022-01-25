// function showMessage() {
//     console.log(this.message)
// }
// let obj = {
//     message: 'Hello!'
// }
// let obj2 = {
//     message: 'Bye!'
// }
// let obj3 = {
//     message: 'YO-YO!'
// }
// showMessage.call(obj)
// showMessage.call(obj2)
// showMessage.call(obj3)

// let phone = {
//     price:10000
// }
// let phone2 = {
//     price:15000
// }
// let phone3 = {
//     price:22000
// }
// function showPrice () {
//     console.log(this.price)
// }
// showPrice.call(phone)
// showPrice.call(phone2)
// showPrice.call(phone3)

// function show (message) {
//     let cnt = 0
//     console.log(cnt)
//     return cnt++
// }
// function getText(callback) {
//     return callback('Hello!')
// }
// function counter() {
//     let num = 0;

//     return function() {
//         return ++num
//     }
// }
// let count = counter()
let arr = [ 
    {
        name: 'Go-Go',
        age: 10,
},
{
    name: 'Bom',
    age: 14
},
{
    name: 'Bang',
    age: 22,
},
{
    name: 'Dow',
    age: 34,
},
{
    name: 'nim',
    age: 17,
},
{
    name: 'low',
    age: 18,
},
{
    name: 'mic',
    age: 22,
},
{
    name: 'yes-yes',
    age: 24,
},
{
    name: 'no-no',
    age: 54,
},
{
    name: 'do-do',
    age: 5,
},
]
/*let adultObjs = arr.filter(function (obj) { return obj.age > 30; })
console.log(adultObjs)
adultObjs.map( (obj) =>  obj.age -= 10) */
//adultObjs.forEach((obj) =>  obj.age -=10)
// console.log(adultObjs)
// arr.push(adultObjs)
// console.log(arr)
// let changedARR = arr.map( function(obj) {  if (obj.age <= 30) { return obj} else if (obj.age > 30) { return  obj.age -= 10 } })
// console.log(changedARR)
//let longNames = arr.filter(function (obj) { return obj.name.length >= 3})
//console.log(longNames)
 /*let i = 0
 while ( i < arr.length) {
    arr[i].name = String(i)
    i++
 }
 console.log(arr)

 for (let i = 0; i < arr.length; i++) {
    arr[i].name = String(i)
    i++
 }
console.log(arr)
 for (let obj in arr) {
    arr[obj].name = String(obj)
 }
 console.log(arr)
 arr.map( function(obj) {return obj.name = arr.indexOf(obj) })
 console.log(arr)
arr.forEach( function(obj) { return  obj.name =  arr.indexOf(obj)})
console.log(arr) */

let msg = 'Hello my dear friend'
const array = msg.split(' ').join(' ')
console.log(array)
