console.log(typeof NaN + null + '') // 'number' + 'null'

const input = 'xbfvhvrr234344dfvss'

 function findNumbers(str) {
     str = str.split('')
     return str
     .filter(el => +el)
     .reduce((a, b) => +a + +b )
 }
 console.log(findNumbers(input))

 const arr = [1,2,3,4,5]
 arr[6] = 6
 delete arr[2]
 console.log(arr)
 console.log(arr[5])
 // добавление в массив всегда медленнее
 const arr1 = [1,2,3,4,5,6,7,8,9,10]
 console.time('test push')
arr1.shift(11)
 console.timeEnd('test push')