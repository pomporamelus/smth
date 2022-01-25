//const func = require("./281021/func")

// const arr = [12,43,35,21,12,245,25,57]
// let changedArr = []
const data = {
    arr: [3,1,2,3,2,5,6,4,3,2],
    filter: function (func) {
        return func(this.arr)
    }
}
function filterRules(arr) {
    let newArr = []
    for (let num of arr) {
        if (num > 2) {
            newArr.push(num)
        }
         else  {
            //arr.splice(arr.indexOf(num),1)
         }
    }
    return newArr
    
}
console.log(data.filter(filterRules))
