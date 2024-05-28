const colors = ["red", "blue", "orange", "green"]; // Object dove: key -> value = index(number) -> value
const user = { 
    name: "Ale", 
    age: 32, 
    email: "ale@gmail.com",
    isAdmin: false,
    level: { 
        value: 1, 
        role: "USER", 
        auth2: { 
            token: "12345678", 
            key: "abcdefg" 
        } 
    } 
}; // Object dove: key -> value = key(string) -> value

const admin = {
    isAdmin: true
}

//* Copy
// const colors2 = colors; // -> 0x00000003534365 = colors -> REFERENCE
// // colors2 = 0x00000003534365

// const colors3 = ["gray", ...colors]; // Copy of array -> ["gray", "red", "blue", "orange", "green"]

// colors[0] = "yellow";
// colors2[1] = "gray";

// console.log("colors: ", colors);
// console.log("colors2: ", colors2);
// console.log("colors3: ", colors3);

// const user2 = user;

// const user3 = { ...user, ...admin }; // -> isAdmin: false -> true
// const DEFAULT_OPTIONS = { render: true, getFromHeaders: false, authToken: false, }
// const options = { render: false, authToken: true };

// const finalOptions = { ...DEFAULT_OPTIONS, ...options } // -> render: false, getFromHeaders: false, authToken: true ...
// const user3 = JSON.parse(JSON.stringify(user));

// user2.name = "Giovanni";

// user.level.role = "ADMIN"

// console.log("user: ", user);
// console.log("user2: ", user2);
// console.log("user3: ", user3);

// const userJSON = JSON.stringify(user, null, 2);

// console.log(userJSON);

// const userPrimary = JSON.parse(userJSON);

// console.log(userPrimary);

//* Optional chaining
// const token = user?.level?.auth?.token;

// if (token === undefined) {
//     console.log("Token non presente, non sei autorizzato a procedere")
// } else {
//     console.log("Ciao, ben venuto nella tua area privata");
// }

//* Destructuring
// console.log(colors[1]); // blue
// console.log(user.age); // 32

// const [_, __, orangeColor] = colors;
// Naming
// Index

// console.log(redColor, orangeColor)

// const { email: userEmail, age: userAge, name, level: { role, auth: { test } }  } = user;
// Index
// Naming

// console.log(userEmail, userAge, name, role, test);

//* Rest
// const sum = (mode, mode2, ...nums) => {
//     // return num1 + num2 + num3 + num4;
//     console.log(mode, mode2, nums)
//     const result = nums.reduce((accumulator, currentItem) => {
//         return accumulator + currentItem;
//         // 0 -> 1 + 2
//         // 1 -> 3 + 2
//         // 2 -> 5 + 3
//         // ...

//         // 0 -> 0 + 1
//         // 1 -> 1 + 2
//         // ...
//     }, 0)

//     return result;
// }

// console.log(sum(null, [], 1, 2, 3, 4, 5, 6));

// const calculate = (initialValue = 0, mode = "SUM", ...nums) => {
//     const DEFAULT_OPERATIONS = ["SUM", "REMOVE", "MULTIPLY", "DIVIDE"];

//     mode = mode.toUpperCase();

//     if (initialValue === undefined || (typeof initialValue !== "number" && isNaN(initialValue))) {
//         throw new Error("initialValue format error");
//     }

//     if (!mode || typeof mode !== "string" || !DEFAULT_OPERATIONS.includes(mode)) {
//         throw new Error("mode format error");
//     }

//     nums.forEach((num) => {
//         if (num === undefined || (typeof num !== "number" && isNaN(num))) {
//             throw new Error("nums must contains numbers");
//         }
//     });
    
//     // MAPPING
//     const operations = {
//         SUM: (n1, n2) => {
//             return n1 + n2;
//         },
//         REMOVE: (n1, n2) => {
//             return n1 - n2;
//         },
//         MULTIPLY: (n1, n2) => {
//             return n1 * n2;
//         },
//         DIVIDE: (n1, n2) => {
//             return n1 / n2;
//         },
//     }

//     // const result = nums.reduce((acc, current) => {
//     //     return operations[mode](acc, current);
//     // }, initialValue);
    
//     return nums.reduce(operations[mode], initialValue);
// }

// const numbersToDivide = [1, 2, 3, 4, 5];

// console.log(calculate(1, "DIVIDE", ...numbersToDivide));

//* Closure
// const calculate = (initialValue = 0, mode = "SUM") => {
//     const DEFAULT_OPERATIONS = ["SUM", "REMOVE", "MULTIPLY", "DIVIDE"];
//     const OPERATIONS = {
//         SUM: (n1, n2) => {
//             return n1 + n2;
//         },
//         REMOVE: (n1, n2) => {
//             return n1 - n2;
//         },
//         MULTIPLY: (n1, n2) => {
//             return n1 * n2;
//         },
//         DIVIDE: (n1, n2) => {
//             return n1 / n2;
//         },
//     }

//     mode = mode.toUpperCase();

//     if (initialValue === undefined || (typeof initialValue !== "number" && isNaN(initialValue))) {
//         throw new Error("initialValue format error");
//     }

//     if (!mode || typeof mode !== "string" || !DEFAULT_OPERATIONS.includes(mode)) {
//         throw new Error("mode format error");
//     }

//     const innerCalculator = (...nums) => {
//         nums.forEach((num) => {
//             if (num === undefined || (typeof num !== "number" && isNaN(num))) {
//                 throw new Error("nums must contains numbers");
//             }
//         });
        
//         return nums.reduce(OPERATIONS[mode], initialValue);
//     }

//     return innerCalculator;
// }

// const numbersToDivide = [1, 2, 3, 4, 5];

// const result = calculate(0, "SUM")(...numbersToDivide);

// console.log(result)