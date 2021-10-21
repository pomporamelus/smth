/* function  Phone(name,color,price) {
    this.name = name
    this.color = color
    this.price = price
}
let samsung = new Phone('samsung21','black',40000)
let iphone = new Phone('iphone13','white',60000)
console.log(samsung,iphone) */

//let arr = [1,2,3,4,5,6,7,8,9]
/*arr.pop() // удаляет последний 
arr.push(10) //добавляет в конец
arr.shift() // удаляет первый
arr.unshift(0) // добавляет в начало 
arr.reverse() // меняет наоборот
arr.splice(2,5,1,5,6) // после какого - либо числа убирает определённое кол-во  и добавляет  сколько угодно аргументов

arr.slice(2,4) // скопирует определённый промежуток
*/
/*function showMessage(message) {
    return `My message: &{message}`
}
function setMessage (callback, message) {
    return callback(message)
}
let message = setMessage(showMessage, 'Hello! My name is CFJY')
console.log(message)

let arr = [1,2,3,4,5,6,7,8,9]

arr.forEach(function(element, index, arr) { // внутри коллбека три параметра
    console.log(element);
    console.log(index)
    console.log(arr)
})

arr.forEach((a) => console.log(a)) */
function random() {
    return Math.round(Math.random() * 20)
}
let fruits = [{
    name: 'apple',
    price: random()
},
{
    name: 'cherry',
    price: random()
},
{
    name: 'strawberry',
    price: random()
},
{
    name: 'orange',
    price: random()
},
{
    name: 'respberry',
    price: random()
},
]
fruits.forEach( function(fruit) {
    console.log(fruit.name,fruit.price)
}
)

//записи андрея
/*
function createCar() {
    //     let car = {
    //         name: '',
    //     };
    
    //     car.name = setCarName();
    //     car.speed = setCarSpeed();
    //     car.color = setCarColor();
    //     car.type = setCarType(car.speed);
    //     car.price = setCarPrice(car.type, car.color);
    // return car
    // }
    
    
    // function Car(name, speed) {
    //     // this = {};  (неявно)
    //     this.name = name;
    //     this.speed = speed;
    //     // return this; (неявно)
    // }
    
    // let bmw = new Car('BMW', 23);
    // let mersedes = new Car('mersedes', 32);
    // console.log(bmw, mersedes);
    
    // let arr = [1,2,3,4,5,6,7,8,9];
    
    // arr.pop();
    // arr.push(10)
    // arr.shift();
    // arr.unshift(0);
    // arr.reverse();
    // arr.splice(5 , 3, 'ge', 'num')`;
    // let num = arr.slice(-2); // 7
    // console.log(num);
    
    // arr.for`Each(function() {
    
    // });`
    
    // function greetin`g(name) {
    //     console.log('greeting');
    //    return `Hello, ${name}`
    //   }
      
    //   function showMessage(callback) {
    //     console.log('showMessage');
    //     let name = 'Please enter your name.';
    //     return callback(name);
    //   }
      
    //   console.log('Call showMessage');
    //   let message = showMessage(greeting);
    //   console.log(message);`
    
    // function showMessage(message) {
    //     return `My message: ${message}`
    // }
    
    // function setMessage(callback, message) {
    //     return callback(message)
    // }
    
    // let message = setMessage(showMessage, 'Hello! My name is Andrew');
    
    // let arr = [1,2,3,4,5,6,7,8,9];
    
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i].
    // }
    
    // arr.forEach(function(element, index, arr) {
    //     console.log(element);
    //     console.log(index);
    //     console.log(arr); 
    // });
    
    // arr.forEach((a) => console.log(a));
    
    let fruits = [
        {
            name: 'Apple',
        },
        {
            name: 'Cherry',
        },
        {
            name: 'Apple',
        },
        {
            name: 'Apple',
        },
        {
            name: 'Cherry',
        },
        {
            name: 'Banana',
        },
        {
            name: 'Banana',
        }
    ]
    
    // fruits.forEach((fruit) => {
    //     fruit.price = Math.round(Math.random() * 100);
    //     console.log(fruit.name, fruit.price);
    // });
    
    fruitsWithPrice = fruits.map((fruit) => {
        fruit.price = Math.round(Math.random() * 100);
        return fruit;
    });
    
    let filteredFruits = fruits.filter((fruit) => fruit.name === 'Apple')
    let foundFruit = fruits.find((fruit) => fruit.name === 'Apple');
    
    // let newArray = []
    
    // fruits.forEach((fruit) => {
    //     if ()
    // })
    
    console.log(fruits);
    console.log(fruitsWithPrice);
    console.log(filteredFruits);
    console.log(foundFruit);
    
    // function(b) {
    //     console.log(b);
    // }
    
    // () => { console.log(b)}
    */
