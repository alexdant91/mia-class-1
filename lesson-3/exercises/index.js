
/**
 * 1. un arrow function che accetta un parametro stringa e la restituisce così com'è se il numero dei caratteri che la
 * compongono è pari, altrimenti restituisce l'inverso:
 *
 * es: "ciao" -> "ciao"; // pari
 * es: "bolla" -> "allob"; // dispari
 */

const newString = (string) => {
  if (string.length % 2 === 0) {
    return string; // Se la lunghezza è pari, restituisce la stringa così com'è
  } else {
    return string.split("").reverse().join(""); // Se la lunghezza è dispari, restituisce la stringa invertita
  }
};

console.log(newString("ciao"));
console.log(newString("bingo"));


const divString = (stringa) => stringa.length % 2 === 0 ? stringa : stringa.split('').reverse().join('');

console.log(divString("ciao"));
console.log(divString("buonanotte"));

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

const user = [
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
              { id: 6, name: "Elisa", age: 17, userLevel: 3, email: "elisa.rossi@gmail.com" },
          ]
     ];
 const newUsers = (users) => {
    let newUser = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].length; j++) {
            newUser.push(users[i][j].email);
        }
    }
    return newUser;
 };

 

console.log(newUsers(user));

/**
 * 3. un arrow function che accetta un paramentro array e un parametro stringa che può essere solo "ASC" e "DESC" 
 * e restituisce l'array ordinato in ordine alfabeto crescente o descrescente in base a valore del secondo parametro:
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

const newArray = (array, mode = " ") => {
    if(mode === "ASC"){
        return array.sort();
    }else {
        return array.sort().reverse();
    }
}
const colorss = ["red", "blue", "green", "yellow", "orange", "purple", "black", "white"];
console.log(newArray(colorss, "ASC"));
console.log(newArray(colorss, "DESC"));