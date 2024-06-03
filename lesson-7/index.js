//1. Dichiariamo costanti statiche
const API_URL = "https://dummyjson.com/products";

//2. Selezioniamo elementi HTML
const $productsTbody = document.querySelector("#products-tbody");

//3. Settiamo lo state per centralizzare i dati
const state = {
    products: [],
};

//4. Otteniamo i dati dal server
const fetchData = async () => {
    try{
        const response = await fetch(API_URL);
        if(response.ok) {
            const result = await response.json();
            state.products = result.products;
        } else {
            throw new Error(`Server error with status code ${response.status}`);
        }
    } catch(err){
        throw err;
    }
}

//5. Renderizziamo i dati ottenuti
const generateProductHTML = (product) => {
    return `
        <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
        </tr>
    `
}

const render = () => {
    const HTML = state.products.map((product) => generateProductHTML(product)).join("");

    $productsTbody.innerHTML = HTML;
}

//6. Dichiariamo e eseguiamo la funzione di init
const init = async () => {
    await fetchData();
    render();
}

init();


