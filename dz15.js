/*Задание 1. Написать модуль который будет работать с числами
1) Проверка на четные числа
2) Проверка находится ли число (c) в диапазоне двух чисел между числами a и b, возвращать true или false
- Функция принимает 3 параметра function range(a, b, c) , где а - это начало, а b конец диапазона, c - проверяемое число

Задание 2. Написать модуль который будет проверять информацию о пользователе.
Примечание, пользователь это объект со следующими полями
const user = {
age: Число,
name: Строка,
surname: Строка,
position: Строка,
password: Строка
} // Пользователя можно описать обычным способом, создав объект, как это сделано выше

--- Модуль должен иметь 2 функций
1) Проверка на длину пароля ( если меньше 9 символов ) , то выдавать сообщение (пароль слишком маленький)
2) Проверка на наличие значений у (name, surname, position) - если нет ни одного, то выдать сообщение (все поля обязательны), если нет name, выдать (нет name) и так для каждого. Если есть name, но нет (surname и position), то выдать (поля surname и position обязательны) и так для каждой комбинации


Задание 3. Написать модуль для работы с массивами
--- Модуль должен иметь 2 функции
1) Написать функцию includes(array, value) которая будет принимать в параметре массив и определенное значение, если это значение будет состоять в массиве то возвращать true, иначе false
2) Написать функцию которая будет переворачивать элементы массива местами, например массив [1, 2, 3, 4, 5] -> превратится [5, 4, 3, 2, 1] не используя метод reverse */