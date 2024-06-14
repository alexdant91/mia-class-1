//1. Dichiariamo costanti statiche
const API_URL = "https://jsonplaceholder.typicode.com/todos";

//2. Selezioniamo elementi HTML
const $dataTbody = document.querySelector("#data-tbody");

//3. Settiamo lo state per centralizzare i dati
const state = {
    data: [],
};

//4. Otteniamo i dati dal server
const fetchData = async () => {
    try{
        const response = await fetch(API_URL);
        if(response.ok) {
            const result = await response.json();
            state.data = result;
        } else {
            throw new Error(`Server error with status code ${response.status}`);
        }
    } catch(err){
        throw err;
    }
}

//5. Renderizziamo i dati ottenuti
const generateHTML = (data) => {
    return `
        <tr>
            <td>${data.userId}</td>
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.completed}</td>
        </tr>
    `
}

const render = () => {
    const HTML = state.data.map((data) => generateHTML(data)).join("");

    $dataTbody.innerHTML = HTML;
}

//6. Dichiariamo e eseguiamo la funzione di init
const init = async () => {
    await fetchData();
    render();
}

init();
