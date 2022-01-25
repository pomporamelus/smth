/*let user = {
    name: 'Bob',
    showName: function() {
        console.log(this)
    }
}

console.log(this) */

/* let car = {
    speed: 100,
    type: 'standart',
    color: 'red',
    showStatistics: function() {
        console.log(this.speed,this.type,this.color)
        }
    }

car.showStatistics() */

const desepticon = {
    name: ' Megathron',
    hp : 100,
    armor: 50,
    power: 14,
    attack : function () {
        return this.power
    },
    getDamaged : function (damage) {
        if (desepticon.armor > damage/2) {
            desepticon.hp -= (damage/2)
            desepticon.armor -= (damage/2)
        } else if (this.armor < damage/2) {
           desepticon.hp = desepticon.hp - (damage - desepticon.armor)
           desepticon.armor = 0
        }
    }
}

const autoBot = {
    name: 'Optimus',
    hp : 110,
    armor: 50,
    power: 20,
    attack : function () {
        return this.power
    },
    getDamaged : function (damage) {
        if (autoBot.armor >= damage/2) {
            autoBot.hp -= (damage/2)
            autoBot.armor -= (damage/2)
        } else if (this.armor < damage/2) {
            autoBot.hp = autoBot.hp - (damage - autoBot.armor)
           autoBot.armor = 0
        }
    }
}
  while ( desepticon.hp >= 0 && autoBot.hp >= 0) {
    let random = Math.round(Math.random() )
    switch (random) {
        case 0 :
                desepticon.getDamaged(autoBot.power)
            if (desepticon.hp <= 0) {
                console.log(desepticon.name + 'Выиграл')
            } 
            break

    case 1 :
            autoBot.getDamaged(desepticon.power) 
            if (autoBot.hp <= 0) {
                console.log(autoBot.name + 'Выиграл')
            } 
            break
        }
        
    }
//console.log(autoBot.getDamaged(100))
//console.log(autoBot)

/*let seasonGlobal = 'winter';
let apple = {
    season: 'summer',
    price: 8,
    setPrice: function  () {
        if ( this.season === seasonGlobal) {
        } else {
            this.price += 10
        }
    },
    showFruit : function () {
        for (let a of this)
        console.log(a)
        }

}
let mandarin = {
    season: 'winter',
    price: 15,
    setPrice: function  () {
        if ( this.season === seasonGlobal) {
        } else {
            this.price += 10
        }
    },
    showFruit : function () {
        for (let a of this)
        console.log(a)
        }
}
let watermelon = {
    season: 'summer',
    price: 30,
    setPrice: function  () {
        if ( this.season === seasonGlobal) {
        } else {
            this.price += 10
        }
    },
    showFruit : function () {
        for (let a of this)
        console.log(a)
        }

}
let fruits= [apple,mandarin,watermelon]

for (let fruit of fruits) {
    fruit.setPrice()
    console.log(fruit.showFruit())
} */


