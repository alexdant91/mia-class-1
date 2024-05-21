
// const isOddOrEven = (number) => {
//     // if (number % 2 !== 0) {
//     //     return "ODD";
//     // } else {
//     //     return "EVEN";
//     // }

//     if (typeof number !== "number" || number === null || number === undefined) {
//         console.error("number must be a valid number");

//         return;
//     }

//     return number % 2 !== 0 ? "ODD" : "EVEN";
// }

// const result = isOddOrEven(null);

// console.log(result);

// const isValidNumber = (number) => {
//     // return (typeof number !== "number" || number === null || number === undefined) ? false : true;
//     return number !== undefined && number !== null && (typeof number === "number" || !isNaN(number)) ? Number(number) : false;
// }

// console.log(isValidNumber("2"))
// console.log(parseInt(2.23));
// console.log(parseFloat(2.23));

// const authMap = {
//     "GUEST": 0,
//     "USER": 1,
//     "MOD": 2,
//     "ADMIN": 3
// }

// const checkAuthLevel = (entity) => {
    // entity = entity.toUpperCase();
    // 1. Using map object
    // return authMap[entity] === undefined ? null : authMap[entity];
    // 2. Using if/else
    // if (entity === "GUEST") {
    //     return 0;
    // } else if (entity === "USER") {
    //     return 1;
    // } else if (entity === "MOD") {
    //     return 2;
    // } else if (entity === "ADMIN") {
    //     return 3;
    // } else {
    //     return null;
    // }
    // 3. Using switch
    // let result = null;
    // switch(entity) {
    //     case "GUEST":
    //         result = 0;
    //         break;
    //     case "USER":
    //         result = 1;
    //         break;
    //     case "MOD":
    //         result = 2;
    //         break;
    //     case "ADMIN":
    //         result = 3;
    //         break;
    //     default:
    //         result = null;
    // }
    // return result;
// }

// console.log(checkAuthLevel("USER"));

// const users = [
//     { id: 0, name: "Ale", age: 32 }, // isOver30: true
//     { id: 1, name: "Federico", age: 28 }, // isOver30: false
//     { id: 2, name: "Sabrina", age: 29 }, // isOver30: false
//     { id: 3, name: "Ivan", age: 34 }, // isOver30: true
// ];

// for (let i = 0; i < users.length; i++) {
//     users[i].isOver30 = users[i].age >= 30;
//     // 0 -> true
//     // 1 -> false
//     // 2 -> false
//     // 3 -> true
// }

// let i = 0;

// while(i < users.length) {
//     users[i].isOver30 = users[i].age >= 30;
//     i++;
// }

// for (let user of users) {
//     console.log(user);
// }

// const obj = { id: 0, name: "Ale", age: 32 }

// for (let key in obj) {
//     console.log(key);
// }

// console.log(users);ù

// const num = 0;

// num.toString(); // -> "0";
// "test".toUpperCase(); // -> "TEST"
// "TEST".toLowerCase(); // -> "test"
// isNaN("2"); // -> true
// parseInt("2.23") // -> 2
// parseFloat("2.23") // -> 2.23
// Number("2") // -> 2

// const obj = {
//     id: 0, 
//     name: "Ale", 
//     age: 32
// }

// // Object.keys({});
// console.log(Object.keys(obj));

// // Object.values({});
// console.log(Object.values(obj));

// // Object.entries({});
// console.log(Object.entries(obj)); // [[key, value], [key, value], ...]

// const keys = Object.keys(obj); // 1/5 consumo di risorse e le prestazioni (x5)

// for(let i = 0; i < keys.length; i++) {
//     const key = keys[i];

//     console.log(key)
// }