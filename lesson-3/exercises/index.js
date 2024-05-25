/**
 * 1. un arrow function che accetta un parametro stringa e la restituisce così com'è se il numero dei caratteri che la 
 * compongono è pari, altrimenti restituisce l'inverso:
 * 
 * es: "ciao" -> "ciao"; // pari
 * es: "bolla" -> "allob"; // dispari
 */

const checkStr = (str) => {
    if(typeof str !== "string") throw new Error(`the ${str} parameter must be a string`);

    return (str.length % 2 === 0) ? str : str.split("").reverse().join("");
}

console.log(checkStr("ciao"));
console.log(checkStr("bolla"));

/**
 * 2. un arrow function che accetta un array di oggetti utenti (innestati) e restituisce un array di email
 */

const users = [
    [
        { id: 0, name: "Giovanni", age: 15, userLevel: 1, email: "giovanni.rossi@gmail.com" },
        { id: 1, name: "Giorgio", age: 25, userLevel: 2, email: "giorgio.bianchi@gmail.com" },
        { id: 2, name: "Elena", age: 18, userLevel: 0, email: "elena.verdi@gmail.com" },
        { id: 3, name: "Manfredi", age: 19, userLevel: 4, email: "manfredi.rossi@gmail.com" },
    ],
    [
        { id: 4, name: "Arturo", age: 13, userLevel: 2, email: "arturo.bianchi@gmail.com" },
    ],
    [
        { id: 5, name: "Andrea", age: 23, userLevel: 1, email: "andrea.verdi@gmail.com" },
        [
            { id: 6, name: "Elisa", age: 17, userLevel: 3, email: "elisa.rossi@gmail.com" },
        ]
    ]
];

const getEmailArray = (array) => {
    if( !Array.isArray(array) ) throw new Error(`the ${array} parameter must be an array`);

    return array.flat(Infinity).map((item) => item.email);
}

console.log(getEmailArray(users));
 
/**
 * 3. un arrow function che accetta un paramentro array e un parametro stringa che può essere solo "ASC" e "DESC" e restituisce 
 * l'array ordinato in ordine alfabeto crescente o descrescente in base a valore del secondo parametro:
 * 
 * "ASC" -> crescente
 * "DESC" -> decrescente
 * 
 * fn(array, mode = "ASC" | "DESC");
 * 
 * come array usiamo: 
 * 
 * const colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white"];
 * 
 */

const colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white"];

const getSortArray = (array, mode = "ASC") => {
    if (mode.toUpperCase() === "ASC") return array.sort();
    else if (mode.toUpperCase() === "DESC") return array.sort().reverse();
    else throw new Error(`the ${mode} parameter must be "asc" or "desc"`);
}
  
console.log(getSortArray(colors, "ASC")); 
console.log(getSortArray(colors, "DESC"));