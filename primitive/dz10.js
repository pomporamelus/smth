/*Задание №1
Написать функцию конструктор CarFactory()
Функция создает св-ва объекта: name, color, speed
Функция создает методы: run, stop, setName, setColor, setSpeed, getCarInfo;


run, stop: Выводят в консоль "Машина завелась(заглушена)". Если она уже заведена(заглушена), в консоль должен выйти: Машина уже заведена(заглушена).
setName, setColor, setSpeed: Изменяют св-ва объекта

getCarInfo: Выводит в консоль инф по миашине.


Задание №2
Написать функцию конструктор AnimalFactory() // принимает 2 параметра - name, type

Функция создает св-ва объекта: name, type, food, lifeTime, isAlve;  // type - хищник, млекопит.;  food - что он ест. Если хищник - мясо, млекопит - трава. lifeTime - оставшееся время жизни. Млекопит живет долльше чем хищник. isAlive - живой или нет. Если оставшееся время жизни - 0, то не живой.


Функция создает методы: die,  getAnimalInfo
по die и getAnimalInfo, думаю, понятно. 




Доп задание (второе усложненное):
у animal есть еще методы - skipTime, eat, (skipTime можно написать и как общую функцию. Вызываем ее, все наши животные проживают месяц. Так даже интереснее и сложнее :D )



eat - Животное ест.
skipTime -  Животное проживает 1 месяц.
Если животное не ест 3 месяца - умирает.
Есть кол-во еды (глобальное) мясо и трава. Когда какое-то из животных ест - эта еда уменьшается.


Создать несколько таких объектов через конструктор и запустить их жизнь через цикл, где они будут в рандомном порядке есть и жить. */
/*function CarFactory() {
isRun = false
isStop = false
 this.run = () => {
    console.log ('Машина завелась')
    isRun = true
}
 this.stop = () =>  {
    console.log ('Машина заглушена')
    isStop = true
}
//run()
this.stop()
    if (isRun) {
        console.log('Машина уже заведена')
    } else if (isStop) {
         console.log('Машина уже заглушена')
        }
    this.name = function setName() {return 'BMW'} ;
    this.color = function setColor() {return 'black'};
    this.speed = function setSpeed() {return  155} ;
    this.info = function getCarInfo() {
        console.log(this)
     }
     this.info ()
}
let car = new CarFactory() */



