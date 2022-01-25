/* За основу взято старое задание с машинами, но мы его усовершенствуем, добавив функции.
Эта задача вам на неделю (до субботы).


Необходимо создать 4 массива:
let allCars = [];
let ecoCollection = { name: 'Эконом', cars: [] };
let standardCollection = { name: 'Стандарт', cars: [] };
let premiumCollection = { name: 'Премиум', cars: [] };


Запускаем цикл в 12 итераций (выполнений), в котором добавляем в массив allCars результат выполнения функции createCar()

функция createCar() создает нам машины. Возвращает объект car

В функции создаем объект с одним свойством: name, который равен пустой строке.
function createCar() {
   let car = {
      name: '',
   };
...
 
Далее по очереди будем задавать характеристики машине (будем создавать новые свойства для объекта)
Необходимо добавить в объект следующие свойства: 
name 
speed
color
type
price

Написать соответствующие функции для создания этих свойств: 
setCarName 
setCarSpeed
setCarColor
setCarType
setCarPrice

car.name = setCarName(); // и т.д. по аналоии

setCarName  - функция генерирует рандомное имя для машины. Нам понадобятся 2 метода для этого: 
Math.random() - генерирует случайное число в диапозоне от 0 до 1
Math.round() - округляет число до целого значения

Math.round(Math.random() * num ) - Рандомное число от 0 до num,
Math.round(Math.random() * (max - min)  + min ) - Рандомное число от min до max,
Если не использовать Math.round() - результатом будут десятичные числа 




Описание Функций:
setCarName() - функция генерирует рандомное число (от 0 до 12) и в зависимости от значения возвращает строку. Использовать конструкцию switch - case вместо if - else
setCarSpeed() - функция генерирует рандомное число (от 100 до 300) и возвращает его.
setCarColor() - по аналогии с setCarName() 
setCarType() - функция принимает в параметрах скорость машины и возвращает строку (eco standard или premium) в зависимости от входного параметра: 
до 150 - эконом
от 150 до 200 - стандарт
выше 200 - премиум
setCarPrice() - функция принимает в параметрах цвет машины, тип машины и возвращает ее цену в зависимости от входных параметров:
Стандартная цена - 2000
У машин класса стандарт цена на 500 выше
У машин класса премиум цена на 1500 выше
Если машина красная - на 300 дороже
Если машина желтая - на 200 дороже
Так же есть некие случайные параметры (После всех манимуляций добавить к цене рандомное число от 0 до 500)


В итоге создали 12 машин и записали в массив allCars
Далее нам нужно рассортировать машины по типам


функция sortCars() принимает массив всех машин и записывает машину в соответствующую коллекцию по типу (ecoCollection, standardCollection, или premiumCollection). В каждой коллекции (объекте) есть свойства name и cars. Машины записываем в массив cars

Использовать конструкцию switch - case вместо if - else



Теперь нужно отобразить статистику.
функция getStatistics() принимает коллекцию машин, находит количество машин, самую дорогую, самую дешевую, общую цену и среднюю цену коллекции и выводит эту статистику в консоль в следующем виде:




**Статистика по Премиум парку: **


Количество машин: 6
Общая цена парка: 23532
Средняя цена парка: 3922 


Самая дорогая машина:
{
  name: 'Toyota Camry',
  speed: 298,
  color: 'red',
  type: 'premium',
  price: 4078
} 


Самая дешевая машина:
{
  name: 'Nissan Pajero',
  speed: 222,
  color: 'blue',
  type: 'premium',
  price: 3764
} */

let allCars = [];
let ecoCollection = { name: 'Эконом', cars: [] };
let standardCollection = { name: 'Стандарт', cars: [] };
let premiumCollection = { name: 'Премиум', cars: [] };

for (let i = 0; i < 12; i++) {
  allCars.push(createCar())
}
function createCar() {
  let car = {
    name: '',
 }
 
 car.name = setCarName()
 car.speed = setCarSpeed()
 car.color = setCarColor()
 car.type = setCarType(car.speed)
 car.price = setCarPrice(car.type, car.color)
 return car
}
function setCarName() {
  let random =  Math.round(Math.random() * 12)
  switch(random) {
  case 0:
  case 1:
      return 'Mercedes'; 
  case 2:
      return 'porshe'
  case 3:
      return 'BMW'
  case 4:
    return 'lexus'
  case 5:
      return 'toyota'
  case 6:
      return 'nissan'
  case 7:
      return 'audi'
  case 8:
      return 'subaru'
  case 9:
      return 'wolkswagen'
  case 10:
      return 'infiniti'
  case 11:
      return 'mazda'
  case 12:
      return 'honda'
  }
}

function setCarSpeed(car) {
  let speed = Math.round(Math.random()* (300 - 100) + 100)
  return speed
}

function setCarColor() {
  let random =  Math.round(Math.random() * 12)
  switch(random) {
  case 0:
  case 1:
      return 'red'; 
  case 2:
      return 'black'
  case 3:
      return 'green'
  case 4:
    return 'yellow'
  case 5:
      return 'white'
  case 6:
      return 'grey'
  case 7:
      return 'brown'
  case 8:
      return 'purple'
  case 9:
      return 'pink'
  case 10:
      return 'golden'
  case 11:
      return 'blue'
  case 12:
      return 'orange'
  }
}

function setCarType(speed) {
  if (speed < 150) {
    return 'eco'
  } else if (speed >= 150 && speed < 200) {
    return 'standart'
  } else if (speed >= 200) {
    return 'premium'
  }
}

function setCarPrice(type,color) {
let standartPrice = 2000;
let  randomparameter  =  Math.round(Math.random() * 500);
  switch (type) {
  case 'standart':
    return standartPrice += 500
  case 'premium':
    return standartPrice += 1500
}
 if (color === 'red') { return standartPrice += 300} else if (color === 'yellow') {return standartPrice += 200}
 return standartPrice += randomparameter
}
console.log(allCars)

function sortCars(mas) {
  for (let i of mas) {
  switch (i.type) {
  case 'eco':
     ecoCollection.cars.push(i)
     break
  case  'standart':
     standardCollection.cars.push(i)
     break
  case 'premium':
    premiumCollection.cars.push(i)
    break
 }
}
}

sortCars(allCars)



function getStatistics(collection) {
  let sum = 0;
  let mostExpenCar = 0;
  let mostLeastCar = 0;
  let mostExpen = collection.cars[0].price;
  let mostLeast = collection.cars[0].price;
  for (let i of collection.cars){
    sum  += i.price
  }
  for (let i in collection.cars) {
    if (mostExpen <  [i+1].price) {
      mostExpenCar = collection.cars[i+1]
    } else {}
    if (mostLeast > [i+1].price) {
      mostLeastCar =  collection.cars[i+1]
    } else {}
  }
  let averPrice = (sum / collection.cars.length)
  
  console.log(('Количество машин: ' + collection.cars.length))
  console.log(('Самая дорогая: ' + mostExpenCar))
  console.log(('Самая дешёвая: ' + mostLeastCar))
  console.log(('Общая цена: ' + sum))
  console.log(('Средняя цена: ' + averPrice))
}
getStatistics(ecoCollection) 










