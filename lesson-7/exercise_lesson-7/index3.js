/*1) Dobbiamo realizzare la stessa tabella che abbiamo visto oggi durante la lezione,
 utilizzando questo link: https://jsonplaceholder.typicode.com/comments come fonte dati.*/

 const URL_API = "https://jsonplaceholder.typicode.com/comments";

 const $valueTbody = document.querySelector("#value-tbody");

 const state ={
    data : []
};

const fetchData = async () => {
    try{
        const response = await fetch(URL_API);
        if(response.ok) {
            const result = await response.json();
            state.data = result;
        } else {
            throw new Error(`Server error with status code ${response.status}`);
        }
    } catch(err){
        throw err;
    }
};

const generateHTML = (data) => {
    return `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.body}</td>
        </tr>
    `
};

const render = () => {
    const HTML = state.data.map((data) => generateHTML(data)).join("");
    $valueTbody.innerHTML = HTML;
};

const init = async () => {
    await fetchData();
    render();
}

init();