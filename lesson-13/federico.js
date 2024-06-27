/*
  1. Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre
*/

const counterFunction = (num) => {
  if (typeof num === "number" && num > 9999) {
    throw new Error(`this number is not valid, il numero dev'essere intero e inferiore a 9999`);
  }return num.toString().length;
}
console.log(counterFunction(1253));
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
    
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()
*/
const calcoloNumero = (num1, num2) => {
  let numeroCasuale = Math.floor(Math.random() * (100-1) )+ 1;           // +1 da aggiungere per arrivare a includere 100

  console.log(`il numero casuale è: ${numeroCasuale}`);

  if(num1 === numeroCasuale) {
    console.log("Il giocatore 1 ha azzeccato il numero casuale!");
  
  }else if(num2 === numeroCasuale) {
    console.log("Il giocatore 2 ha azzeccato il numero casuale!");
  
  }else {

    diff1 = Math.abs(num1 - numeroCasuale);                        //Math.abs per ottenere il valore assoluto di un numero, senza considerare il segno.
    diff2 = Math.abs(num2 - numeroCasuale);
    
    if(diff1 < diff2) {
      console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!")
    
    }else if(diff1 > diff2) {
      console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!")
    
    }else {
      console.log("Nessuno dei due ha azzeccato il numero casuale ed entrambi i giocatori si sono avvicinati allo stesso modo")
    }
  }
}

console.log(calcoloNumero(12, 24));
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
const calcolaVicinanza = (a, b, n) => {
  const distanzaA = Math.abs(a - n);
  const distanzaB = Math.abs(b - n);

  if (distanzaA === distanzaB) {
    return 0;
  }else if(distanzaA > distanzaB) {
    return 1;
  }else {
    return -1;
  }
}
//Variante
/* 
let numRandom = Math.floor(Math.random() * 100) + 1;
console.log(`Numero casuale generato: ${numRandom}`);

const giocatore1 = Number(prompt("Giocatore1 inserisci un numero: "));
const giocatore2 = Number(prompt("Giocatore2 inserisci un numero: "));

if(giocatore1 === numRandom) {
  console.log("il Giocatore1 ha indovinato il numero!!")
}else if(giocatore2 === numRandom) {
  console.log("il Giocatore1 ha indovinato il numero!!")
}else {
     const risultato = calcolaVicinanza(a, b, n);
    if (risultato === -1) {
        console.log("Il giocatore 1 si è avvicinato di più al numero!"); 
    } else if (risultato === 1) {
        console.log("Il giocatore 2 si è avvicinato di più al numero!");
    } else {
        console.log("Entrambi i giocatori sono equidistanti dal numero!");
    }
};
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
*/
function verificaGiorno(num) {
  if(typeof num !== "number"){
  return false;
}
return  num >= 1 && num <= 7; 
};
console.log(verificaGiorno(5));

 giornoDellaSettimana = (num) => {
  if(verificaGiorno(num)){
  const settimana = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];
  return settimana[num - 1];
} else {
    return "Peccato, non posso indovinare il giorno.";
  }
}
console.log(giornoDellaSettimana(5));

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

const calcolatrice = (num1, num2, operazione) => {
  if (typeof num1 !== "number" || typeof num2 !== "number" && typeof operazione !== "string"){
    throw new Error(alert("quelli selezionati non sono numeri"));
  }
  switch(operazione) {
    case "somma" : 
      return num1 + num2;
    case "sottrazione" : 
      return num1 - num2;
    case "moltiplicazione" : 
      return num1 * num2;
    case "divisione" :
      return num1 / num2;
    case "modulo" :
      return num1 % num2;
    case "percentuale" :
      return Math.pow(num1, num2);
    case "media" : 
      return (num1 + num2) / 2; 
    default:
      alert('Operazione non valida');
  }

};

console.log(calcolatrice(5,2,"sottrazione"));
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
const calculator = () => {
  let strCalcolatrice = "";
  for(i = 0; i <= 100; i++){
    strCalcolatrice += `${i} `;
  if(i % 10 === 0) {
    strCalcolatrice += "\n";
  }
 }
 console.log(strCalcolatrice);
};
console.log(calculator());
 
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

const numeroDado = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;      //floor = numero intero; random = numero randomico; * (max - min + 1)); + min = l'estrazione di Math.random partirà così dal numero 1 e non da 0
};

const totPuntiGamer =(tiriGamer) => {
  let punteggio = 0;
  for(i = 0; i < tiriGamer; i ++) {
    punteggio += numeroDado(1, 6);                              //i valori da attribuire per capire il range su cui estrarre il numero nella funzione numeroDado
  }
  return punteggio;
}

let numeroTiri = 3;

let gamer1 = totPuntiGamer(numeroTiri);
let gamer2 = totPuntiGamer(numeroTiri);

console.log("Punteggio Giocatore 1: " + gamer1);
console.log("Punteggio Giocatore 2: " + gamer2);

if(gamer1 > gamer2) {
  console.log("Il Giocatore 1 vince!");
}else if(gamer1 < gamer2) {
  console.log("Il Giocatore 2 vince!");
}else {
  console.log("Pareggiooo!");
}
/*
  8. Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50
*/

let numeroTabellina = parseInt(prompt("inserisci un numero: "));

if(isNaN(numeroTabellina)){
  alert("inserire un numero valido");
}else{
  for(i = 0; i <= 10; i ++) {
    let risultato =[ i * numeroTabellina];
    document.write(risultato);
  }
};
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


