// push (...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
// Для поиска среди элементов:

// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// Дополнительно:

// Array.isArray(arr) проверяет, является ли arr массивом.
// Методы sort, reverse и splice изменяют исходный массив.

// arr.some(fn)/arr.every(fn) проверяет массив.

// Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.

// arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

// arr.copyWithin(target, start, end) – копирует свои элементы, начиная со start и заканчивая end, в собственную позицию target (перезаписывает существующие).

//cd .. - шаг назад
//cd *folder* - перейти в папку folder
//mkdir - создать
//rmdir - удалить

// Для Git:
//git add .
//git commit -m "initial commit"
//git push -u origin main
//  git pull origin 'имя ветки' - соединяет какую-то ветку с нынешней
/*git add . //Добавить все файлы  
git commit -m "commit message" // Записать изменения 
git push -u origin *branch name* // отправить на удаленный гит 
git checkout *branch name* // переключиить ветку 
git pull origin *branch name* // скачать изменения 
git remote // Работа в удаленным репозиторием 
git remote add origin // связать локальный с удаленным 
git remote remove // отвязаться от удаленного 
git init // проинизиализировать гит репозиторий 
git branch // посмотреть активную ветку
git branch -b //создаёт и переключает на новую ветку
git -d *branch name* - удалить ветку
 */
//git push origin module1//
//стек - это pop push (last in first out)
//очередь - shift unshift(first in first out)
//call apply bind


//const obj2 = JSON.parse(JSON.stringify(obj1)) - копирует объект, не зависит от вложенности. Предпочтительней, чем spread
// spread - распаковывает
// rest - упаковывает
// Array.from - тоже преобразует перебираемый объект (такой как строка) в массив:
// git remote set-url origin ''
//tsc -v - узнать версию typescript
//npm i -g typescript - скачать typescript
//npm i -g @nestjs/cli - скачать nest
// sudo npm i -g @nestjs/cli - для мака
//nest -v - узнать версию nest 
//Set-ExecutionPolicy RemoteSigned
//  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// npm - менеджер пакетов
// npm run start: dev - запустить бэк
// api - controller (рычаг бэка)
// старая запись импорта (в несте нет) - const IR = require(./response.interface)
//@*smth* - декоратор
// nest g mo *name* - создаёт модуль
// nest s mo *name* - создаёт сервис
// nest co mo *name* - создаёт котроллер
