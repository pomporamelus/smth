const items = require("./items");
const clothes = require("./clothes");
const methods = require("./methods");

//const soldClothes = methods.showSoldItems(clothes.clothes)

const {notSold, sold} = methods.showSoldItems(clothes.clothes);
console.log('Непроданные товары:',notSold);
console.log('Проданные товары:',sold);

// console.log(methods.showSoldItems(clothes.clothes).notSold)
// console.log(methods.showSoldItems(clothes.clothes).sold)

