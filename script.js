var Organism = Object.create(null);
var Animal = Object.create(Organism);
var Mammal = Object.create(Animal);
var Bear = Object.create(Mammal);
var Black = Object.create(Bear);

Mammal.hasHair = true;
Mammal.hasPaws = true;

Black.name = "Jerry";
Black.run = function {
  console.log("I am running");
}
