
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Prototypal Inheritance

Understanding the usage of Prototypal Inheritance

[![General Assembly Logo](https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2Fl4lRbfZKiS4aRvJ96%2Fgiphy-downsized.gif)](https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2Fl4lRbfZKiS4aRvJ96%2Fgiphy-downsized.gif)

## Objectives

We have covered Javascript variables, functions, objects and callbacks but, we have not used **prototypes** or **constructors** yet.


By the end of this lesson students will be able to:

-  Use Prototypal Inheritance
-  Create instances of objects
-  Understand the usage and flexibility it allows
-  Vocabulary


## Why use Prototypal OO Javascript?
1. It's flexible

1. Does not use classes


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




<!-- **Constructor** -
**Instance** - -->

## I Do: Getting Started
We will be using a function called ```Object.create``` which takes an object or ```null``` as it's first argument.
What do you think this function does? It creates a new object, and uses the argument as it's **prototype**.

Let's define an object.
```js




```


```js

```

```js
```

### I Do:

```js

```


### You Do:

```js

```

### We Do:



### Resources:

Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?
https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
