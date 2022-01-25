let syr = {
    name: 'a'
}
let syr1 = {
    name: 'a'
}
let syr2 = {
    name: 'b'
}

let as = {
    strings: []
}
let non = {
    strings: []
}
let arr = [syr,syr1,syr2]
function sort(mas) {
for (let i of mas) {
    switch(i.name) {
        case 'a':
            as.strings.push(i)
            break
    case 'b':
         non.strings.push(i)
         break
    }
}
}
sort(arr)
console.log(as)
console.log(non)

let a = undefined
a = 2
console.log(a)