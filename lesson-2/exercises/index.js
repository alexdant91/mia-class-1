/**
 * 1. Arrow function that accept a number as parameter to check if is even or odd
 */

const isEvenOrOdd = (number) => {
    if(typeof number !== "number" || number === undefined || number === null) {
        console.log(`${number} is not a valid number!`);
        return;
    }

    number = parseInt(number); 

    return number % 2 === 0 
    ? console.log(`${number} is even`) 
    : console.log(`${number} is odd`);
}

isEvenOrOdd("test");
isEvenOrOdd(2);
isEvenOrOdd(3);
isEvenOrOdd(7.58);

/**
 * 2. Add a paramenter `isOver18` if is over 18 and `isAuthorized` if `user_level` is more than 3 to each user inside following array
 */

const users = [
    { id: 0, name: "Giovanni", age: 15, user_level: 1, email: "giovanni.rossi@gmail.com" },
    { id: 0, name: "Giorgio", age: 25, user_level: 2, email: "giorgio.bianchi@gmail.com" },
    { id: 0, name: "Elena", age: 18, user_level: 0, email: "elena.verdi@gmail.com" },
    { id: 0, name: "Manfredi", age: 19, user_level: 4, email: "manfredi.rossi@gmail.com" },
    { id: 0, name: "Arturo", age: 13, user_level: 2, email: "arturo.bianchi@gmail.com" },
    { id: 0, name: "Andrea", age: 23, user_level: 1, email: "andrea.verdi@gmail.com" },
    { id: 0, name: "Elisa", age: 17, user_level: 3, email: "elisa.rossi@gmail.com" },
];

for(let user of users) {
    user.isOver18 = user.age >= 18;
    user.isAuthorized = user.user_level > 3;
}

console.log(users);

/**
 * 3. Parse every object converting age in number if not a number, set it to `0` if `null`
 */

const customers = [
    { id: 0, name: "Giovanni", age: 15, user_level: 1, email: "giovanni.rossi@gmail.com" },
    { id: 0, name: "Giorgio", age: "25", user_level: 2, email: "giorgio.bianchi@gmail.com" },
    { id: 0, name: "Elena", age: 18, user_level: 0, email: "elena.verdi@gmail.com" },
    { id: 0, name: "Manfredi", age: "19", user_level: 4, email: "manfredi.rossi@gmail.com" },
    { id: 0, name: "Arturo", age: null, user_level: 2, email: "arturo.bianchi@gmail.com" },
    { id: 0, name: "Andrea", age: "23", user_level: 1, email: "andrea.verdi@gmail.com" },
    { id: 0, name: "Elisa", age: 17, user_level: 3, email: "elisa.rossi@gmail.com" },
];

// First way
for(let customer of customers){
    if(typeof customer.age !== "number"){
      customer.age = parseInt(customer.age) || 0;
    }
}

console.log(customers);

// Second way
for(let customer of customers){
    customer.age = +(customer.age);
}

console.log(customers);