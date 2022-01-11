//map
// const employee = {
//     name: 'Dalores',
//     age: 31,
//     job: 'Google'
// }
// const entries = [
//     ['name','Bob'],
//     ['age', 23],
//     ['job', 'Lalafo']
// ]
// // console.log(Object.entries(employee))
// // console.log(Object.fromEntries(entries))
 //const user = new Map(entries) //можно ключом сделать объект
// user.set('isAdmin', true) 
// user.delete('job') 
// console.log(user)
// for ([key, val] of user) {
//     console.log(val)
// }

// for ([key, val] of Object.entries(employee)) {
//     console.log(val)
// }
// console.log(employee)


//set

// const numbers = [1, 2, 3, 4, 5, 6, 2, 1, 3, 4]
// const uniqueNumbers = new Set(numbers)
// console.log(uniqueNumbers)
// uniqueNumbers.add(32)
// console.log(uniqueNumbers.entries())


// function getName() {
//     console.log(this, this.name);
// }

// const user2 = {
//     name: 'Harry',
// }

// // call apply bind
// // getName.call(user);

// // 'В понедельник: #1 Пердмет: Math, Препод: Saliev в аудитории 230'

//  const test = [
//      {
//         dateName: 'monday',
//         lessons: [
//             {name: 'Math', teacher: 'Saliev', auditory: 230},
//             {name: 'Biology', teacher: 'Mamedov', auditory: 301},
//             {name: 'History', teacher: 'Ramatov', auditory: 130},
//         ]
//     },
//     {
//         dateName: 'friday',
//         lessons: [
//             {name: 'Language', teacher: 'Tony', auditory: 230},
//             {name: 'Dance', teacher: 'Parker', auditory: 301},
//             {name: 'Phisics', teacher: 'Peter', auditory: 130},
//         ]
//     }
// ]

//  const res = test.map((t) => {
//      if (t.dateName === 'monday') {
//         return t.lessons.map((l) =>
//             `Предмет: ${l.name} у ${l.teacher}, в аудитории ${l.auditory}`)
//      }
// })

//  console.log(res);

// // const weekDays = ['sunday', 'monday']

// // const dayToday = 0;

// // console.log(weekDays[dayToday]);

// // lessons.find((lesson) => lesson.date === weekDays[dayToday])

// let date = new Date("2021-11-12");
// console.log(date);
// //${new Date().toISOString()}



const weekSchedule = [
    {
       dateName: 1,
       lessons: [
           {name: 'Химия', teacher: 'Наталья Валентиновна', auditory: 304},
           {name: 'Кыргызская литература', teacher: 'Анара Абдуросуловна', auditory: 406},
           {name: 'Алгебра', teacher: 'Инна Афанасьевна', auditory: 412},
           {name: 'История', teacher: 'Кубатбек Сапарбаевич', auditory: 303},
           {name: 'Алгебра', teacher: 'Инна Афанасьевна', auditory: 412},
           {name: 'ЧИО', teacher: 'Дамира Анарбековна', auditory: 406},
           {name: 'География', teacher: 'Владимир Николаевич', auditory: 409},
       ]
   },
   {
    dateName: 2,
    lessons: [
        {name: 'Геометрия', teacher: 'Инна Афанасьевна', auditory: 412},
        {name: 'Геометрия', teacher: 'Инна Афанасьевна', auditory: 412},
        {name: 'Русская литература', teacher: 'Ольга Николаевна', auditory: 302},
        {name: 'Кыргызский язык', teacher: 'Айнура Туратбековна', auditory: 130},
        {name: 'Английский язык', teacher: 'Замира Токтогуловна', auditory: 216},
        {name: 'Биология', teacher: 'Эльвира Наримановна', auditory: 101},
        {name: 'Физкультура', teacher: 'Роман Валерьевич', auditory: 0},
    ]
    },
{
    dateName: 3,
    lessons: [
        {name: 'Физика', teacher: 'Елена Станиславовна', auditory: 404},
        {name: 'Физика', teacher: 'Елена Станиславовна', auditory: 404},
        {name: 'Русский язык', teacher: 'Ольга Николаевна', auditory: 302},
        {name: 'Русская литература', teacher: 'Ольга Николаевна', auditory: 302},
        {name: 'Алгебра', teacher: 'Инна Афанасьевна', auditory: 412},
        {name: 'Алгебра', teacher: 'Инна Афанасьевна', auditory: 412},
    ]
    },
    {
    dateName: 4,
    lessons: [
        {name: 'Английский язык', teacher: 'Ольга Николаевна', auditory: 302},
    ]
   },
   {
    dateName: 5,
    lessons: [
        {name: 'Math', teacher: 'Saliev', auditory: 230},
        {name: 'Biology', teacher: 'Mamedov', auditory: 301},
        {name: 'History', teacher: 'Ramatov', auditory: 130},
    ]
   },
   {
       dateName: 6,
       lessons: [
           {name: 'Language', teacher: 'Tony', auditory: 230},
           {name: 'Dance', teacher: 'Parker', auditory: 301},
           {name: 'Phisics', teacher: 'Peter', auditory: 130},
       ]
   }
]
// try{
// const res = weekShedule.map((t) => {
//     let date = new Date()
//     if (t.dateName === date.getDay()) {
//        return t.lessons.map((l) =>
//            `Предмет: ${l.name} у ${l.teacher}, в аудитории ${l.auditory}`)
//     } else{}
// })
// console.log(res)
// } catch{ console.log('ошибка') }

for (let day of weekSchedule) {
    let date = new Date()
    if (day.dateName === date.getDay()) {
        return day.lessons.map ((i) => 
        console.log(`Предмет: ${i.name} у ${i.teacher}, в аудитории ${i.auditory}`)
        )
    } else {}
}
