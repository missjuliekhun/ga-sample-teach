
// Let's create a food object!
//Object has an init and eat method
//'this' assigns the type

let food = {
  init: function (type) {
    this.type = type
  },
  eat: function() {
    console.log('you ate the' + this.type)
  }
}

food.init('waffle')
food.eat()
