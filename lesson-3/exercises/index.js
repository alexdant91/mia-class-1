/**
 * 1. un arrow function che accetta un parametro stringa e la restituisce così com'è se il numero dei caratteri che la 
 * compongono è pari, altrimenti restituisce l'inverso:
 * 
 * es: "ciao" -> "ciao"; // pari
 * es: "bolla" -> "allob"; // dispari
 */

/**
 * 2. un arrow function che accetta un array di oggetti utenti (innestati) e restituisce un array di email
 * 
 * const users = [
 *      [
 *          { id: 0, name: "Giovanni", age: 15, userLevel: 1, email: "giovanni.rossi@gmail.com" },
 *          { id: 1, name: "Giorgio", age: 25, userLevel: 2, email: "giorgio.bianchi@gmail.com" },
 *          { id: 2, name: "Elena", age: 18, userLevel: 0, email: "elena.verdi@gmail.com" },
 *          { id: 3, name: "Manfredi", age: 19, userLevel: 4, email: "manfredi.rossi@gmail.com" },
 *      ],
 *      [
 *          { id: 4, name: "Arturo", age: 13, userLevel: 2, email: "arturo.bianchi@gmail.com" },
 *      ],
 *      [
 *          { id: 5, name: "Andrea", age: 23, userLevel: 1, email: "andrea.verdi@gmail.com" },
 *          [
 *              { id: 6, name: "Elisa", age: 17, userLevel: 3, email: "elisa.rossi@gmail.com" },
 *          ]
 *      ]
 * ];
 */

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