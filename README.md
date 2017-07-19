
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Prototypal Inheritance


## Objectives

We have covered Javascript variables, functions, objects and callbacks but, we have not used prototypes or constructors yet.


By the end of this lesson students will be able to:

-  Understand the general usage Prototypal Inheritance
-  Demonstrate that flexibility it allows
-  Vocabulary

[![General Assembly Logo](https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2Fl4lRbfZKiS4aRvJ96%2Fgiphy-downsized.gif)](https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2Fl4lRbfZKiS4aRvJ96%2Fgiphy-downsized.gif)

## Agenda 
1) What is prototypal inheritance? 
2) Write a function prototype (.prototype)
3) Using constructors to construct a ```new``` object
4) Create an instance of an object
5) Methods

## Prototypal Inheritance 
Objects inheriting from other objects. Objects inherit the properties and methods from their prototype.

### We all know what functions are, right? 
They're not only used to perform a particular task but **functions are also objects.** When you create a **function prototype**, it automatically has a ```prototype``` property. 

Example:  
```js

function foo() {

}

typeof foo.prototype // 'object' 


```

### Let's create a **constructor** that will construct instances of objects: 

```
function Bear (){

}

```

### Our constructor function about will create instances of ```Bear``` by using the ```new``` keyword: 

```js
var panda = new Bear

```




## Preparation


1.  Fork and clone this repository.

1.  ```cd``` into the ```practice``` folder

1. ```touch``` index.html script.js


## Vocabulary

**Prototype** - property that allows a user to create new properties in the same prototype.
Example:
```js
function Car(make, model, year, color, tires) {
    this.make = "volkswagon";
    this.model = "jetta";
    this.color = "yellow";
    this.tires = 4;
}

Car.prototype.year = 2001;

```

**Constructor** - Constructors are used to _construct_ a new Object
Example:
```js
var myString = new String();
```

**Prototypal Inheritance** - A working object instance. In JavaScript it is an object in which other JavaScript objects inherit their properties and methods from. **Inheritence** is a code reuse mechanism





