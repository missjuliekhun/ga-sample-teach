// var Organism = Object.create(null);
var Organism = Object.create(null);
var Animal = Object.create(Organism);
var Mammal = Object.create(Animal);
var Dog = Object.create(Mammal);
var Spot = Object.create(Dog);

Mammal.hasHair = true;
