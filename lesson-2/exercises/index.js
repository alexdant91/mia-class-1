/**
 * 1. Arrow function that accept a number as parameter to check if is even or odd
 */
const oddEven = (number) => {
if (number === null || number === undefined || (typeof number !== "number" && !isNaN(number))) {
    throw new Error("number must be a valid number");
}
    return number % 2 === 0 ? "EVEN" : "ODD";
}

console.log(oddEven(3));
console.log(oddEven(2));

/**
 * 2. Add a paramenter `isOver18` if is over 18 and `isAuthorized` if `user_level` is more than 3 to each user inside following array
 * 
 * const users = [
 *     { id: 0, name: "Giovanni", age: 15, user_level: 1, email: "giovanni.rossi@gmail.com" },
 *     { id: 0, name: "Giorgio", age: 25, user_level: 2, email: "giorgio.bianchi@gmail.com" },
 *     { id: 0, name: "Elena", age: 18, user_level: 0, email: "elena.verdi@gmail.com" },
 *     { id: 0, name: "Manfredi", age: 19, user_level: 4, email: "manfredi.rossi@gmail.com" },
 *     { id: 0, name: "Arturo", age: 13, user_level: 2, email: "arturo.bianchi@gmail.com" },
 *     { id: 0, name: "Andrea", age: 23, user_level: 1, email: "andrea.verdi@gmail.com" },
 *     { id: 0, name: "Elisa", age: 17, user_level: 3, email: "elisa.rossi@gmail.com" },
 * ];
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

     for (let i = 0; i < users.length; i++) {
         users[i].isOver18 = users[i].age >= 18;
         users[i].isAuthorized = users[i].user_level >= 3;
     }

     console.log(users);


/**
 * 3. Parse every object converting age in number if not a number, set it to `0` if `null`
 * 
 * const users = [
 *     { id: 0, name: "Giovanni", age: 15, user_level: 1, email: "giovanni.rossi@gmail.com" },
 *     { id: 0, name: "Giorgio", age: "25", user_level: 2, email: "giorgio.bianchi@gmail.com" },
 *     { id: 0, name: "Elena", age: 18, user_level: 0, email: "elena.verdi@gmail.com" },
 *     { id: 0, name: "Manfredi", age: "19", user_level: 4, email: "manfredi.rossi@gmail.com" },
 *     { id: 0, name: "Arturo", age: null, user_level: 2, email: "arturo.bianchi@gmail.com" },
 *     { id: 0, name: "Andrea", age: "23", user_level: 1, email: "andrea.verdi@gmail.com" },
 *     { id: 0, name: "Elisa", age: 17, user_level: 3, email: "elisa.rossi@gmail.com" },
 * ];
 */

const users1 = [
         { id: 0, name: "Giovanni", age: 15, user_level: 1, email: "giovanni.rossi@gmail.com" },
         { id: 0, name: "Giorgio", age: "25", user_level: 2, email: "giorgio.bianchi@gmail.com" },
         { id: 0, name: "Elena", age: 18, user_level: 0, email: "elena.verdi@gmail.com" },
         { id: 0, name: "Manfredi", age: "19", user_level: 4, email: "manfredi.rossi@gmail.com" },
         { id: 0, name: "Arturo", age: null, user_level: 2, email: "arturo.bianchi@gmail.com" },
         { id: 0, name: "Andrea", age: "23", user_level: 1, email: "andrea.verdi@gmail.com" },
         { id: 0, name: "Elisa", age: 17, user_level: 3, email: "elisa.rossi@gmail.com" },
     ];

     for (let i = 0; i < users1.length; i++) {
         users1[i].age = Number(users1[i].age) || 0;
     }
     console.log(users1);