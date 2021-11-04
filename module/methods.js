module.exports = {
    showSoldItems (arr) {
       let notSold = []
       let sold = []
        for (let one of arr) {
            if (one.isSold ) {
                sold.push(one)
            }
            else {
                notSold.push(one)
            }
        }
        return {
            notSold,
            sold,
        }
    }
}