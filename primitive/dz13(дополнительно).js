/*Задание 3. (доп)
Так же как и в задании 1.
Добавить get price классу Car. 
Скорость машины вычислить от силы ее деталей. // детали у машины 3: мотор, коробка, тормоза. На скорость машины влияет Мотор и Коробка (мотор оказывает в 2 раза больше влияния, чем коробка)
Управление машины - зависит от коробки и тормозов (тормоза дают в 2 раза больше чем коробка)
Цена высчитывается суммой всех ее деталей + Зависит от скорости и управления.


Классы DriftCar, StandardCar, PremiumCar: наследуются от Car, но price этих классов берет price родителя и прибавляет к нему свою сумму (в зависимости от типа)
У DriftCar есть доп. деталь ( nitro поле в details) .


Задание 4. (доп)
Мифическое сражение.
классы - Witcher, Dragon, Item, Spell; (Ведьмак Дракон Предмет Способность)
У предмета есть прочность. Используем ее - предмет портится. От прочности зависит эффективность предмета (шлем лучше защищает, меч - больше урона)
У Ведьмака есть здоровье, энергия, сила, предметы и заклинания.
Когда Ведьмак произносит заклинание - тратится энергия. Нельзя произнести заклинание, которое требует 10 энергии имея 9.
Дракон так же имеет здоровье, энергию. Может дышать огнем тратя энергию. Может взлететь в воздух и восполнить энергию. (когда Дракон в воздухе, ведьмак может поразить его только заклинанием).
Предметы так же могут обладать доп эффектами. Вроде отразить атаку нападающего, Восполнять здоровье, энергию и т.д. */  
let arr = []
let sum = 0
// for (let  a of details ) {
//     speed *= a
// }

class Car {
    constructor(name, color, ) {
        this.name = name
        //this.speed = speed
        this.color = color
        this.details = arr
    }
      getPrice() {
        return sum = arr[0].price + arr[1].price + arr[2].price
      }
} 
class Detail {
    constructor (name, power, price){
        this.name = name
        this.power = power
        this.price = price
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
let car = new Car('bmw','blue')
new Detail('мотор', 3000 ,5000)
new Detail('коробка',2000,10000)
new Detail('тормоза',2500,1500)

//console.log(car)
//let car1 = new DriftCar('porshe',250,'green')

//console.log(car1)
//car1.drift()
car.getPrice()
console.log(sum)