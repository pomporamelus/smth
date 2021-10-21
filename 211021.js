let goods = [ {
    name: "iphone",
    price: 80000,
    state : {
        name: 'sold',
        order: 2
    }
},
  {
    name: "samsung",
    price: 45000,
    state : {
        name: 'sold',
        order: 2
    }
},
{
    name: "xiaomi",
    price: 25000,
    state : {
        name: 'active',
        order: 1
    }
},
 {
    name: "nokia",
    price: 10000,
    state : {
        name: 'active',
        order: 1
    }
},
{
    name: "iphone2",
    price: 70000,
    state : {
        name: 'active',
        order: 1
    }
}
]
let iphones = []
let androids = []
let test = 
goods.sort(function (a,b) {
    return a.state.order - b.state.order
})
console.log(test)
let sumSold = 0
let sumActive = 0
goods.forEach((a) => {
    if (a.state.order === 1) {
        sumActive += a.price
    }
    else if (a.state.order === 2) {
        sumSold += a.price
    }
    if(a.name === 'phone') {
        iphones.push(a)
    } else {androids.push(a)}
})
console.log(`Сумма активных товаров: ${sumActive}`)
console.log(`Сумма проданных товаров: ${sumSold}`)
console.log(androids)
console.log(iphones)

