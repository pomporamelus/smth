// 1 Задание
const salaries = [500, 300, 600, 400]
let sum = 0
salaries.forEach((num) => sum += num)
let averageSalary = 0

salaries.forEach(function (num) {   
if (salaries.indexOf(num) == salaries.length-1) {
        averageSalary = sum / salaries.length} }  
)
console.log(`Сумма всех зарплат: ${sum} `)
console.log(`Средняя зарплата: ${averageSalary} `)

// 2 Задание
const users = [ {age: 20, name: 'john'} , {age: 30, name: 'berry'}, {age: 15, name: 'Jimmy'} ]
let adults = users.filter( function(user) {return user.age >= 18 } )
console.log(adults)

// 3 Задание
flowers = [ { name: 'rouse', price: 300 }, { name: 'sunflower', price: 1000}, {name: '101 rouse', price: 3000}]
let flowersWithDiscount = flowers.map(function(flower) {   
    if (flower.price >= 2500) {
        flower.withDiscount = flower.price - flower.price * 20 / 100
        return flower}
    else if (flower.price >= 900) {
            flower.withDiscount = flower.price - flower.price * 15 / 100
        return flower}    
     else  if (flower.price >= 200)
     { flower.withDiscount = flower.price - flower.price * 5 / 100
        return flower }
})
console.log(flowersWithDiscount)
// 4 Задание
const words = ["учу", "готовлю", "красный", "летаю", "пишу", "слушаю", "пою", "танцую", "жава", "скрипт"]
let learn = words.filter(function(word) {if (word == "учу" || word == "жава" || word == "скрипт" ) { return word} 
})
console.log(learn.join(" "))
let write = words.filter(function(word) {if (word == "пишу" || word == "жава" || word == "скрипт" ) { return word} 
})
console.log(write.join(" "))

