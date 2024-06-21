//1. Dichiariamo costanti statiche
const URL_API = "https://jsonplaceholder.typicode.com/todos";


//2. Selezioniamo elementi HTML
const $valueProducts = document.querySelector("#value-tbody");
      //$ per indicare una variabile che contiene elemento del DOM
      //document.querySelector è un metodo che restituisce il primo elemento HTML corrispondente al selettore
      // se trova l'elemento corrispondente lo assegna a $valueProducts
      
      
//3. Settiamo lo state per centralizzare i dati
const state ={  
data: []
};


//4. Otteniamo i dati dal server
const fetchData = async () => {         //arrow function asincrona
    try{                                 //prende in esame il codice  che potrebbe generare eccezioni
        const response = await fetch(URL_API);    //fetch effettua una richiesta http all'url specificato e await attende la risposta dal server 
        if(response.ok) {                         //verifica che la richiesta sia andata a buon fine
            const result = await response.json();  //trasforma la risposta in un oggetto javascript
            state.data = result;                     //assegna l'oggetto javascript all'array stateArr
        } else {
            throw new Error(`Server error with status code ${response.status}`);    //nel caso in cui response.ok fosse falso viene lanciata una nuova eccezione con un messaggio di errore e il codice di stato HTTP
        }
    } catch(err){                              //gestisce qualsiasi eccezzione che passa dal try    
        throw err;                             //viene lanciato l'errore catturato
    }
};
//5. Renderizziamo i dati ottenuti 
const generateHTML = (data) => {         //arrow function con parametro data
    return `                              
        <tr>
            <td>${data.userId}</td>      
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.completed}</td>
        </tr>
    `                                   // questo è un template literal, dove le espressioni vengon utilizzate  per interpolare i valori delle proprietà dell'oggetto 'data'
};                                      // la funzione genera quindi una riga di tabella con piu celle ognina delle quali contiene una proprieta dell'oggetto data

const render = () => {
    const HTML = state.data.map((data) => generateHTML(data)).join("");      //metodo che itera su ogni elemento dell'array state.data e applica la funzione generateHTML al valore di ogni elemento;   unisce tutti gli elementi dell'array risultante da map in una singola stringa
    $valueProducts.innerHTML = HTML;       // La proprietà innerHTML di un elemento DOM rappresenta il contenuto HTML all'interno di quell'elemento.                        
};
//6. Dichiariamo e eseguiamo la funzione di init

const init = async () => {                    //alla costante init viene attribuita un arrow function che esegue la funzione fetchData e render
    await fetchData();                        //La parola chiave await viene utilizzata per aspettare che la promessa restituita da fetchData venga risolta.
    render();                                 //dopo l'esecuzione della funzione fetchData, la funzione render viene eseguita
}                                             //Questa funzione genera il contenuto HTML per la tabella dei prodotti e aggiorna il DOM.

init();                                       //esegue immediatamente la funzione init dopo la sua definizione. init(): Avvia l'intero processo di fetch dei dati e rendering della tabella.


