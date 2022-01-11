const { resolve } = require("path/posix")

const promise = new  Promise(
    (resolve, reject) => {
    setTimeout(() => {
            console.log('Time out!')
            resolve('done!')
        }, 1000)
    }
)
promise.then((value) => {
    console.log('Получил внутри промиса: ', value)

    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(1), 3000)
    });
})
.then((f) => {
    console.log('Значения с предыдущего then 1: ',f)
    return 2
})
.then((b) => {
    console.log('Значения с предыдущего then 2: ',b)
})

