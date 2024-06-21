/*2) Dobbiamo realizzare la stessa tabella che abbiamo visto oggi durante la lezione,
 utilizzando questo link:  https://jsonplaceholder.typicode.com/photos come fonte dati.*/ 
 
 const URL_API = "https://jsonplaceholder.typicode.com/photos";

 const $tbodyValue = document.querySelector("#tbody-value");

 const state ={
    data: []
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
            <td>${data.albumId}</td>
            <td>${data.title}</td>
            <td>${data.url}</td>
            <td>${data.thumbnailUrl}</td>
        </tr>
    `
};

const render = () => {
    const HTML = state.data.map((data) => generateHTML(data)).join("");
    $tbodyValue.innerHTML = HTML;
};

const init = async () => {
    await fetchData();
    render();
};

init();