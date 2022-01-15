 const {Telegraf, Markup} = require('telegraf')

const BOT_TOKEN = '2081667950:AAE6oT9LcLDkl7Q4xcJpbv2-q4TIZt5Z8oA';

const bot = new Telegraf(BOT_TOKEN)

//.toISOString()

// const Markup2 = require('telegraf/markup');
// console.log(Markup);
// console.log(Markup2); 
//✋✋✋

bot.start(
    (ctx) => 
        ctx.reply(`Hello  ${ctx.message.from.first_name}`, 
        Markup.keyboard([ 
            ['/fact' , '/time'],
            ['/schedule', '/information']
        ]).resize()
));

function randomFact() {
    const facts = ['Самая крупная жемчужина в мире достигает 6 килограммов в весе','Законодательство США допускало отправку детей по почте до 1913 года',
'В языке древних греков не существовало слова, которое обозначало религию','В современной истории есть промежуток времени, когда на счетах компании «Apple», было больше средств, чем у американского правительства',
'Среднее облако весит порядка 500 тонн, столько же весят 80 слонов','В Ирландии никогда не было кротов','Флот США содержит больше авианосцев, чем все флоты мира вместе взятые',
'Скорость распространения лавы после извержения, близка к скорости бега гончей','Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже',
'Библия – книга, которую чаще всего воруют в американских магазинах','Примерно 1/3 всей соли, производимой в США, расходуется на очистку дорог ото льда',
'Существует пробирка, диаметр которой, в 10000 раз меньше диаметра человеческого волоса','Саудовская Аравия не содержит рек','В Антарктиде существует единственная река – Оникс, она течет всего 60 дней в году',
'У медуз нет мозгов и кровеносных сосудов','Ежедневно 60 человек становятся миллионерами','До 17 века термометры заполняли коньяком','Кошки спят больше половины своей жизни',
'Лимон содержит больше сахара, чем клубника','Самый долгий полёт курицы продолжался 13 секунд','Ладожское озеро является самым большим в Европе',
'За год на Землю падает до 500 кг марсианского метеорита','Земля делает полный оборот вокруг своей оси за 23 часа 56 минут и 4 секунды',
'На Юпитере регулярно идут алмазные дожди','Во вселенной больше звёзд, чем песчинок на всех пляжах Земли','В мире всего 7% левшей',
'Правое лёгкое человека вмещает больше воздуха, чем левое','Самая трудно излечимая фобия – боязнь страха','Алмазы могут гореть',
'Корова может подняться по лестнице, но не может спуститься','Утки способны нырять на глубину до 6 метров','Китайский язык является самым популярным в мире',
'У жирафа и человека одинаковое количество шейных позвонков','Самое высокое здание в Европе находится в Москве','Страусы развивают скорость до 70 км в час']
    return facts[Math.floor(Math.random() * facts.length)]
}

bot.command('fact', (ctx) => {
    const fact = randomFact()
    ctx.reply(fact)
})
bot.command('time', (ctx) => {
    function showDateName(data) {
        switch (data) {
            case 0:
                return 'воскресенье'
                break;
                case 1:
                return 'понедельник'
                break;
                case 2:
                return 'вторник'
                break;
                case 3:
                return 'среда'
                break;
                case 4:
                return 'четверг'
                break;
                case 5:
                return 'пятница'
                break;
                case 6:
                return 'суббота'
                break;
        }
    }
    let date = new Date()
    let today = date.getDay()
    ctx.reply(
        `
        Сегодня: ${Intl.DateTimeFormat('ru-RU',).format(date)} (${showDateName(today)}) 
         
        Сейчас: ${date.getHours()} часов , ${date.getMinutes()} минут , ${date.getSeconds()} секунд
        `)
})
///${date.getMonth()} 
// bot.on('text', (ctx) => {
//     ctx.reply("👍")
// })

bot.command('schedule', (ctx) => {
    const weekSchedule = [
    {
       dateName: 1,
       lessons: [
           {name: 'Химия', teacher: 'Наталья Валентиновна', auditory: 304 , which: 1},
           {name: 'Кыргызская литература', teacher: 'Анара Абдуросуловна', auditory: 406 , which: 2},
           {name: 'Алгебра', teacher: 'Инна Афанасьевна', auditory: 412, which: 3},
           {name: 'История', teacher: 'Кубатбек Сапарбаевич', auditory: 303, which: 4},
           {name: 'Алгебра', teacher: 'Инна Афанасьевна', auditory: 412, which: 5},
           {name: 'ЧИО', teacher: 'Дамира Анарбековна', auditory: 406, which: 6},
           {name: 'География', teacher: 'Владимир Николаевич', auditory: 409, which: 7},
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
           {name: 'Psychology', teacher: 'Peter', auditory: 130},
       ]
   }
]
 try { for (let day of weekSchedule) {
    let date = new Date()
    if (day.dateName === date.getDay()) {
        return day.lessons.map ((i) => 
        ctx.reply(`Предмет: ${i.name}, учитель: ${i.teacher}, в кабинете ${i.auditory}`)
    
        )
    } else {}
}
} catch {ctx.reply(`${ctx.message.from.first_name} , сегодня нет уроков ! Отдыхай `)}
}
)
bot.command('information', (ctx) => {
  ctx.reply(`Имя:  ${ctx.message.from.first_name}
   Id: ${ctx.message.from.id}
   smth: ${ctx.message.text}
    `)
 })
bot.on('text', (ctx) => {
    ctx.reply("👍")
})

bot.launch().then(() => console.log('Бот запущен')) 