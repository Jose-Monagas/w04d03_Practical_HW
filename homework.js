// Task 1: Create Hamster Class

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }

  setOwner(owner) {
    this.owner = owner;
  }
}

// test the code

const hamster = new Hamster("mr. bean");
// console.log(hamster.getPrice());

// Task 2: Create Person Class

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`hello I'm ${this.name}`);
  }

  eat(mood, weight) {
    this.mood += mood;
    this.weight += weight;
  }

  excercise(weight) {
    this.weight -= weight;
  }

  ageUp(age, height, weight, mood, bankAccount) {
    this.age += age;
    this.height += height;
    this.weight += weight;
    this.mood += mood;
    this.bankAccount += bankAccount;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// Task 3: Create a story with person class

// Instantiate a new Person named Timmy.
const Timmy = new Person("Timmy");

// Age Timmy five years.
Timmy.ageUp(5, 0, 0, 0, 0);

// Have Timmy eat five times.
Timmy.eat(5, 5);

// Have Timmy exercise five times.
Timmy.excercise(5);

// Age Timmy nine years.
Timmy.ageUp(9, 9, 9, 9, 9);

// Create a Hamster named "Gus".
const Gus = new Hamster("Gus");

// Set Gus's owner to the string "Timmy".

Gus.setOwner("Timmy");

// Have Timmy "buy" Gus.
Timmy.buyHamster(Gus);

// Age Timmy 15 years.

Timmy.ageUp(15, 15, 15, 15, 15);

// Have Timmy eat twice.
Timmy.eat(2, 2);

// Have Timmy exercise twice.

Timmy.excercise(2);
// console.log(Timmy);

// Task 4:  Create Chef Factory and Dinner Class
// Add a constructor to Dinner that sets the string properties appetizer, entree, and dessert.
class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

// Add a method to Chef that takes three arguments and returns a new Dinner instance based on those arguments.
class Chef {
  newDinner(appetizer, entree, dessert) {
    return new Dinner(appetizer, entree, dessert);
  }
}

// Have the Chef create 3 Dinner instances and log the dinners.

const chef = new Chef();

const dinner1 = chef.newDinner(
  "salmon tartare",
  "steak frites",
  "chocolate cake"
);

const dinner2 = chef.newDinner("caesar salad", "seared halibut", "tiramisu");

const dinner3 = chef.newDinner("clam chowder", "scallops", "hot fudge sunday");

console.log(dinner3);
