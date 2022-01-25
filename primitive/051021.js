/*function setNames () {
    let a = 1;
    switch(a) {
        case 'Hello':
            return 'Bob';

        case 'Bye':
            return 'Max';
    }
}
let role = 'User';
switch(role) {
    case 'Admin':
        console.log('Hello Admin')
} */
/* let cars= [1,2,3]
let user = {
    name: 'Bob',
    age: 32,
    gender: 'male',
}
/* for (let i = 0; i < Array.length; i++) {
    cars[i]
} 
for (let car in cars){
    console.log(car)
} */

/* let car = {
    name: 'BMW',
    color: 'Black',
    speed: 250,
    price: 3000,
} */
  /* let numbers = [23,53,64,75,86,10]

 for (let number of numbers) {
     console.log(number)
 }
 for (let number in numbers) {
    console.log(number)
}
for (let key in cars) {
    console.log(key)
} */

let random = Math.round(Math.random() * (5-1) + 1)

switch (random) {
    case 1:
       console.log('Мало')
        break
    case 2:
        console.log( random , 'Не хватает')
        break
    case 3:
        console.log( random , 'Почти')
        break
    case 4:
        console.log( random , 'Идеально')
        break
    case 5:
        console.log( random , 'Перебор')
        break
} 


/*let car = {
    fuel : 100,
    run: function() {
        this.fuel -= 20;
    },
    fil : function() {
        this.fuel += 20;
    },
}
car.run()
console.log(car.fuel)
car.fil()
console.log(car.fuel) */

/*let batman = {
    hp : 100,
    armor: 50,
    power: 10,
    attack: function() {
        superman.hp -= this.power
    },
    getDamage: function() {
        this.hp -= superman.power
    }
}
let superman = {
    hp : 100,
    armor: 50,
    power : 10,
}

batman.getDamage()
console.log(batman) */

/*const phone = {
    model: 'Nokia 3310',
    call : function(name = 'Noname') {
        console.log(`Набираю номер ${name}`);
    }
}
//phone.call()

const user = {
    name: 'Bob',
    age: 21,
    celebrateBirthday: function() {
        this.age++
    }
}
//user.celebrateBirthday()
//console.log(user.age) */

/*const car = {
    fuel: 100,
    run: function() {
        this.fuel -=10;
    },
    fill: function(liters) {
        this.fuel += liters;
    }
}
car.run();
car.fill(30)
console.log(car.fuel) */

//phone.call(user.name)

/* function getAccess(role) {
    switch(user.role) {
        case 'Admin':
            return 'Админский доступ'
            break
        case 'User':
            return 'Добро пожаловать,дорогой'
            break
        case 'Guest':
            return 'Авторизуйтесь пожалуйста'
            break
   }

} 

const user = {
    name: 'Bob',
    role: 'Admin',
    login : getAccess(role)
}

function canLogin(user) {
    return user.login;
}

console.log(canLogin(user)) */
//console.log(1)
