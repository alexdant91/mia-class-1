//1. Dichiariamo costanti statiche
const API_URL = "https://jsonplaceholder.typicode.com/comments";

//2. Selezioniamo elementi HTML
const $commentsTbody = document.querySelector("#comments-tbody");

//3. Settiamo lo state per centralizzare i dati
const state = {
    comments: [],
};

//4. Otteniamo i dati dal server
const fetchData = async () => {
    try{
        const response = await fetch(API_URL);
        if(response.ok) {
            const result = await response.json();
            state.comments = result;
        } else {
            throw new Error(`Server error with status code ${response.status}`);
        }
    } catch(err){
        throw err;
    }
}

//5. Renderizziamo i dati ottenuti
const generatecommentHTML = (comment) => {
    return `
        <tr>
            <td>${comment.postId}</td>
            <td>${comment.id}</td>
            <td>${comment.name}
            <td>${comment.email}</td>
            <td>${comment.body}</td>
        </tr>
    `
}

const render = () => {
    const HTML = state.comments.map((comment) => generatecommentHTML(comment)).join("");

    $commentsTbody.innerHTML = HTML;
}

//6. Dichiariamo e eseguiamo la funzione di init
const init = async () => {
    await fetchData();
    render();
}

init();