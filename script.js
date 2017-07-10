
// We are defining an object that does not inherit from any other object
var Organism = Object.create(null);


var Animal = Object.create(Organism);
var Mammal = Object.create(Animal);
var Bear = Object.create(Mammal);
var George = Object.create(Bear);


// Let's give each object some properties

Mammal.hasHair = true;
Mammal.hasPaws = true;

Bear.name = "George", "Kelly";
Bear.type = "Koala";
