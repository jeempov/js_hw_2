//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printFood(anArray) {
    for(let i = 0; i < Object.keys(anArray).length; i++){
        console.log(Object.keys(anArray)[i]) 
        console.log(Object.values(anArray)[i])
    }
}

printFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () =>
        console.log(`This person is named ${this.name} and is ${this.age} years old`);

    this.addAge = (age=1) => this.age = this.age + age;
}
    
let Seb = new Person('Seb', 11);
Seb.printInfo();
Seb.addAge();
Seb.addAge();
Seb.addAge();
console.log(Seb.age);
Seb.addAge(5)
Seb.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// if string.length > 10

stringSize = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            console.log("Big word");
            resolve(true);
        } else {
            console.log("Smol number")
            reject(false);
        }
    })
} 

stringSize('Potato');
stringSize("Boil 'em, mash 'em, put 'em in a stew");