/*
  1. Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre
*/

/**
 * Count digits
 * @param {number} num 
 * @returns {number} digits count
 */
const countDigits = num => {
  if (typeof num !== 'number' || num > 9999) {
    throw new Error (
      `num must be a valid number (got ${typeof num}) lower than 9999`
    );
  }

  return num.toString ().length;
};

/*
    2. Chi l'azzecca?
    Scrivi un programma che dati due numeri di due ipotetici giocatori,
    generi un numero casuale compreso tra 1 e 100 (zero escluso),
    verifichi se uno dei due giocatori ha azzeccato il numero casuale,
    e in caso contrario quale dei due si è avvicinato di più al numero.
  
    Esempio:
      Input: giocatore 1 = 5, giocatore 2 = 10
      Output: Numero casuale generato = 7
              "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"
  
    Consigli:
    Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
    Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
      (Math.random() * (max-min) + min) ovvero, nel tuo caso:
      (Math.random() * (100-1) + 1)
    Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()
*/

/**
 * Guess winner or nearest number against random one
 * @param {number} num1 
 * @param {number} num2 
 * @returns {string} Result of the game
 */
const guessNumnber = (num1, num2) => {
  if (num1 == num2) throw new Error ('Players must guess a different number');

  const MAX_NUMBER = 100;
  const randomNumber = Math.floor (Math.random () * (MAX_NUMBER - 1)) + 1;

  if (num1 == randomNumber) return 'Player 1 win';
  if (num2 == randomNumber) return 'Player 2 win';

  const d1 = Math.abs (randomNumber - num1);
  const d2 = Math.abs (randomNumber - num2);

  if (d1 > d2) return 'Player 2 is nearest than player 1';
  if (d2 > d1) return 'Player 1 is nearest than player 2';
  else return 'Player 1 and Player 2 are at the same distance';
};

/*
    3. Fai il sensitivo
    Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
      - 0 Se A e B sono equidistanti da N
      - 1 Se B è più vicino a N rispetto ad A
      - -1 Se A è più vicino a N rispetto a B
  
    Variante:
    Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
    vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.
  
    Consigli per la variante:
    Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
    Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"
*/

/**
 * Calculate distance from a and b to n
 * @param {number} n Static number to check
 * @param {number} a Player 1 guessed number
 * @param {number} b Player 2 guessed number
 * @returns {number} If player 1 return -1, if player 2 return 1, else return 0
 */
const calculateDistance = n => (a, b) => {
  if (a == b) throw new Error ("a and b can't be equal");

  const da = Math.abs (a - n);
  const db = Math.abs (b - n);

  if (da < db) return -1;
  if (da > db) return 1;
  return 0;
};

/*
    4. Indovina il giorno
    Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
    Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.
  
    La seconda funzione:
    - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
      considerando la seguente corrispondenza:
          1 = Lunedì
          ...
          7 = Domenica
    - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'
*/

/**
 * Guess day of week from number format (1-7)
 * @param {number} dn Range day number from 1 to 7
 * @returns {string} Name of week day selected (dn)
 */
const guessWeekDay = dn => {
  if (
    !dn ||
    typeof dn !== 'number' ||
    !Number.isInteger (dn) ||
    dn < 1 ||
    dn > 7
  ) {
    throw new Error (
      `dn must be a valid integer (got ${typeof dn}) greater than 1 and lower than 7`
    );
  }

  return [
    null,
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
  ][dn];
};

/*
    5. La calcolatrice
    Scrivi un programma che dati:
      - Due numeri
      - Una stringha che identifichi l'operazione da eseguire, es: "somma"
    Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.
  
    Le operazioni supportate sono le suguenti:
      somma
      sottrazione
      moltiplicazione
      divisione
      modulo (solo tra interi)
      potenza
      media
  
  
    Esempi:
      Input: a = 5, b = 6, operazione = "somma"
      Output: 11
  
      Input: a = 5, b = 6, operazione = "media"
      Output: 5.5
  
  
    Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).
*/

/**
 * Calculator for different operations
 * @param {string} operation 
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
const calculator = (operation, n1, n2) => {
  const DEFAULT_OPERATIONS = [
    'SUM',
    'REMOVE',
    'MULTIPLY',
    'DIVIDE',
    'MODULE',
    'POW',
    'AVERAGE',
  ];

  operation = operation.toUpperCase ();

  if (
    !operation ||
    n1 === undefined ||
    n1 === null ||
    n2 === undefined ||
    n2 === null ||
    typeof operation !== 'string' ||
    isNaN (n1) ||
    isNaN (n2) ||
    !DEFAULT_OPERATIONS.includes (operation)
  ) {
    throw new Error (
      'operation must be a valid string, n1 and n2 must be valid number'
    );
  }

  switch (operation) {
    case 'SUM':
      return n1 + n2;
    case 'REMOVE':
      return n1 - n2;
    case 'MULTIPLY':
      return n1 * n2;
    case 'DIVIDE':
      return n1 / n2;
    case 'MODULE':
      if (!Number.isInteger (n1) || !Number.isInteger (n2))
        throw new Error ('n1 and n2 must be integer for module operation');
      return n1 % n2;
    case 'POW':
      return Math.pow (n1, n2);
    case 'AVERAGE':
      return (n1 + n2) / 2;
    default:
      throw new Error ('Operation not accepted');
  }
};

/*
    6. Rincorri la decina
    Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  
    Esempio:
      Output: 1 2 3 4 5 6 7 8 9 10
              11 12 13 14 15 16 17 18 19 20
              21 22 23 24 25 26 27 28 29 30
              31 32 33 34 35 36 37 38 39 40
              41 42 43 44 45 46 47 48 49 50
              51 52 53 54 55 56 57 58 59 60
              61 62 63 64 65 66 67 68 69 70
              71 72 73 74 75 76 77 78 79 80
              81 82 83 84 85 86 87 88 89 90
              91 92 93 94 95 96 97 98 99 100
  
    Consiglio:
    Per andare a capo usa '\n'.
*/

/**
 * Out numbers from 1 to 100 with a '\n' every 10
 * @returns 
 */
const outWithSpaceEvery10 = () => {
  let output = '';
  for (i = 1; i <= 100; i++) {
    output += `${i} `;
    if (i % 10 === 0) output += '\n';
  }
  return output;
};

/*
    7. Vinci tu!
    Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
    simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
    Supponendo che ogni dado abbia al massimo 6 facce.
  
    Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
    ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.
  
  
    Consigli:
    Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
*/

/**
 * Roll the dice with 2 players and calculate who win
 * @param {number} n Numbers of rolls
 * @returns 
 */
const rollTheDice = n => {
  if (!n || isNaN (n) || !Number.isInteger (n)) {
    throw new Error ('n must be a valid integer number');
  }
  const p1 = [], p2 = [];

  const arrayRange = n => Array.from (new Array (n));

  arrayRange (n).forEach (() => {
    p1.push (Math.round (Math.random () * 5) + 1);
    p2.push (Math.round (Math.random () * 5) + 1);
  });

  const p1r = p1.reduce ((a, c) => a + c, 0);
  const p2r = p2.reduce ((a, c) => a + c, 0);

  if (p1r > p2r) {
    return 'Player 1 win';
  } else if (p1r < p2r) {
    return 'Player 2 win';
  } else {
    return "It's a draw";
  }
};

/*
    8. Ti ricordi le tabelline?
    Scrivi un programma che dato un numero stampi la tabellina corrispondente.
  
    Esempio:
      Input: 5
      Output: 0 5 10 15 20 25 30 35 40 45 50
*/

/**
 * Get table numbers
 * @param {number} n 
 * @returns {number[]}
 */
const tables = n => {
  return Array.from (new Array (n)).map ((_, i) => n * i);
};

/*
    9. La mia rubrica
    Scrivi un programma per la gestione di una rubrica telefonica.
  
    Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
    L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.
  
    Definisci un array che rappresenti la lista dei contatti.
    Implementa i metodi dell'array per le seguenti operazioni:
        - Visualizzazione dell'intera lista contatti
        - Inserimento di un nuovo contatto
        - Modifica di uno contatto passando in input l'indice dell'array
        - Cancellazione di un contatto passando in input l'indice dell'array
        - Ricerca passando il nome e restituendo il singolo contatto.
  
    Variante:
    Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
    e ricava l'indice sul quale applicare l'operazione.
*/

/**
 * Manage a phonebook
 * @returns {Object<string, function>}
 */
const managePhonebook = () => {
  const contacts = [
    {name: 'Alex', tel: '3333333333'},
    {name: 'Alex', tel: '3333333337'},
    {name: 'Federico', tel: '3333333334'},
    {name: 'Sabrina', tel: '3333333335'},
    {name: 'Alessandro', tel: '3333333336'},
  ];

  // Visualizzazione dell'intera lista contatti
  const getAll = () => {
    return contacts;
  };
  // Inserimento di un nuovo contatto
  const create = contact => {
    if (Array.isArray(contact) || typeof contact !== 'object') {
      throw new Error ('contact must be a valid object');
    }

    if (contacts.findIndex (c => c.tel == contact.tel) === -1) {
      contacts.push (contact);
    }
  };
  // Modifica di un contatto passando in input l'indice dell'array
  const edit = (index, data) => {
    if (Array.isArray(data) || typeof data !== 'object') {
      throw new Error ('contact must be a valid object');
    }
    if (!Number.isInteger(index)) {
      throw new Error("index must be an integer");
    }

    contacts[index] = { ...contacts[index], ...data };
  }
  // Cancellazione di un contatto passando in input l'indice dell'array
  const remove = (index) => {
    if (!Number.isInteger(index)) {
      throw new Error("index must be an integer");
    }

    contacts.splice(index, 1);
  }
  // Ricerca passando il nome e restituendo il singolo contatto.
  const search = (name) => { // RegExp();
    return contacts.filter((contact) => {
      const serchRegExp = new RegExp(name, "ig");
      return contact.name.match(serchRegExp)
    });
  }

  return {
    getAll,
    create,
    edit,
    remove,
    search,
  }
};

/*
    10 Tanti numeri
    Scrivi un programma che dato array di numeri, calcoli la media dei valori e
    restituisca in output la media e tutti i valori minori della media.
  
    Esempio:
      Input: a = [3, 5, 10, 2, 8]
      Output: media = 5.6, valori minori = [3, 5, 2]
  
    Variante:
    Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
*/

const calculateAverage = numbers => {
  if (
    !numbers ||
    !Array.isArray (numbers) ||
    numbers.some (n => typeof n !== 'number')
  ) {
    throw new Error ('numbers must be a valid array of numbers');
  }

  const average = numbers.reduce ((a, c) => a + c, 0) / numbers.length;

  return {
    average,
    lowerValues: numbers.filter (n => n < average),
  };
};

/**
 * Crea una funzione per gestire un array di utenti
 * 
 * Funzionalità:
 * 
 *  - Ottenere tutti gli utenti
 *  - Creare un utente
 *  - Modificare un utente
 *  - Eliminare un utente
 *  - Cercare un utente in base al nome o al cognome
 * 
 */

const manageUsers = () => {
  const users = [
    { full_name : "Alessandro D'Antoni", email: "alexdant91@gmail.com", password: "123456", age: 33 },
  ]

  // Ottenere tutti gli utenti
  const getAll = () => {}
  // Creare un utente
  const create = () => {}
  // Modificare un utente
  const edit = () => {}
  // Eliminare un utente
  const remove = () => {}
  // Cercare un utente in base al nome o al cognome
  const search = () => {}

  // Restituisci un oggetto con tutte le funzioni
  return {}
}