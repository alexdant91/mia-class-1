/*
  1. Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


const numLen = (num) => {
  if (typeof num !== "number" && num > 9999 && num != Number.isInteger(num)) {
    throw new Error("Ci deve essere un numero intero minore di 9999")
  } else {
    let numString = num.toString();
    return numString.length;
  }
}

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



let random = (Math.random() * (100-1) + 1) ; 
random = Math.floor(random);

function giocatori(a , b ) {
  if(a == random && b == random) { //controlliamo le varie possibilità inziali
    return "Quasi impossibile";
  }
    else if(a == random) {
    return "Giocatore uno ha azzecato";
  } else if(b == random) {
    return "Giocatore due ha azzecato";
  } else {
    if(a > random && b > random ) { //calcolo quando random è maggiore di entrambi i numeri
      let l1 = a - random ;
      let l2 = b - random ;
      if (l1 > l2) {
        return a ; 
      } else {
        return b;
      } 
    } else if(a > random && b < random) { //calcolo quando random è in mezzo a maggiore, b minore
      let l1 = a - random;
      let l2 = random - b;
      if(l1 > l2){
        return a;
      } else {
        return b;
      }
    } else if(a < random && b > random) { //calcolo quando random è in mezzo a minore, b maggiore
      let l1 = random - a;
      let l2 = b - random;
      if (l1 > l2) {
        return a;
      } else {
        return b;
      }
    } else if(a < random && b < random) { //calcolo quando enrtambi i numeri sono minori di random
      let l1 = random - a;
      let l2 = random - b;
      if(l1 > l2) {
        return a;
      } else {
        return b;
      }
    }
  }
}

/*
  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()
*/

/*
  3. Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B


function numeri(a, b, n) {
  if(a > n && b > n) {
    let d1 = a - n;
    let d2 = b - n;
    if(d1 == d2) {
      console.log("0");
    }
  } else if(a > n && b < n) {
    let d1 = a - n;
    let d2 = n - b;
    if(d1 > d2) {
      console.log("-1");
    } else {
      console.log("1")
    }
  } else if(a < n && b < n) {
    let d1 = n - a;
    let d2 = n - b;
    if(d1 > d2) {
      console.log("-1");
    } else {
      console.log("1");
    }
  }
}


/*
  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"
*/

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

function verifica(a) {
  let n = 0;
  do {
    n++
    if(a == n) {
      return true;
    } else {
      return false;
    }
  } while (n < 7)
}

if(verifica(a) == true) {
  switch(a) {
    case 1 : console.log("Lunedi");
    break;

    case 2 : console.log("Martedi");
    break;

    case 3 : console.log("Mercoledi");
    break;

    case 4 : console.log("Giovedi");
    break;

    case 5 : console.log("Venerdi");
    break;

    case 6 : console.log("Sabato");
    break;

    case 7 : console.log("Domenica");
    break;
  }
} else {
  console.log("Peccato, non posso indovinare il giorno.");
}



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


function calcolatrice(operation , a, b) {
  switch(operation) {
    case "somma" : let somma = a + b;
    console.log(somma);
    break;

    case "sottrazione" : let sott = a - b;
    console.log(sott);
    break;

    case "moltiplicazione" : let molt = a * b;
    console.log(molt);
    break;

    case "divisione" : let div = a / b;
    console.log(div);
    break;

    case "modulo" : let mod = a % b;
    console.log(mod)
    break;

    case "potenza" : let pot = (a * a) * b;
    console.log(pot);
    break;

    case "media" : let media = (a + b) / 2;
    console.log(media);
    break;

    default : console.log("operazione non valida (non presente tra le operazioni consentite)");
  }
}
*/

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


function numeri() {
  let str = "";
  for(i = 1; i < 101 ;i++) {
    str += `${i} `;
    if(i % 10 === 0) {
      str += "\n";
    }
  }
  console.log(str);
} 

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

let score1 = 0;
let score2 = 0;
let player1, player2;

function tiri(n) {
  while(n > 0) {
    player1 = Math.floor(Math.random() * 6) + 1;
    player2 = Math.floor(Math.random() * 6) + 1;
    
    score1 = score1 + player1;
    score2 = score2 + player2;
  n--;
  }
  if(score1 > score2){
    console.log("winner player1:" + score1)
  } else if(score1 < score2){
    console.log("winner player2:" + score2)
  } else {
    console.log("Tie score")
  }
}

tiri(2);

/*
  8. Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50
*/

/*
  9. La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.
*/

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