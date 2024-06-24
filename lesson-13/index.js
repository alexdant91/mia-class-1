// 1. scrivi una funzione che accetta un paramentro stringa e dopo aver controllato il tipo di dato restitusci come dato la lunghezza della stringa.

const getStrLen = (str) => {
    if (!str || typeof str !== "string") {
        throw new Error(`str must be a valid string, got ${typeof str}`);
    }

    return str.length;
} 

// 2. scrivi una funzione che accetta un parametro stringa e restituisce true o false in base alla lunghezza, se pari true se dispari false

const isEvenLen = (str) => {
    const len = getStrLen(str);
    return len % 2 === 0;
}

// 3. scrivi una funzione che accetta un parametro stringa e se la lunghezza è pari la restituisce cosi com'è altrimenti restituisce la stringa al contrario.

const reverseIfOdd = (str) => {
    const isEven = isEvenLen(str);
    if (isEven == true) {
        return str;
    } else {
        return str.split("").reverse().join("");
    }
}

console.log(reverseIfOdd("Sabrina"))