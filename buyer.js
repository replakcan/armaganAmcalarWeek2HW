module.exports = class Buyer {
  constructor(name, age, budget, mood, hasHouse) {
    this.name = name;
    this.age = age;
    this.budget = budget;
    this.mood = mood;
    this.hasHouse = hasHouse;
  }
  makeOffer = (offer, person) => {
    
    if (offer >= 5000) {

        person.mood = "satisfied";
        this.budget -= offer;
        person.budget += offer;
        this.mood = "happy";
        this.hasHouse = true;
        person.hasHouse = false;

      console.log("It was good to make business with you.");

    } else {

      person.mood = "notSatisfied";
      console.log("You have to make a better offer pal!");
    }
  };
};
