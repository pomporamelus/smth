const fs = require('fs')


function checkAdmin() {
    try {
       const data = fs.readFileSync('a.txt', {encoding: 'utf-8'})
        // const admin = false

        // if (!admin) {
        //     throw 'Ты не админ!!!'}
    
    console.log('Данные с файла: ', data)
    } catch(e) {
        fs.writeFileSync('a.txt', 'просто текст', {encoding: 'utf-8'})
        console.log('Файл a.txt не найден, создаю новый' + e)
    }
}
checkAdmin()

//console.log('но скрипт всё-равно выполнился')