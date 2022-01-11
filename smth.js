//let allSum = 0
function onlyNum(a) {
    a = a.split('')
    console.log( a)
    for (param of a)  {
        if(typeof param ==  typeof 1) {
          let  allSum = 0
          allSum += param
        } else { 
            delete a[a.indexOf(param)] }
            
}
}
let a = 'sme1kmk2lkm345'
console.log(onlyNum(a))

