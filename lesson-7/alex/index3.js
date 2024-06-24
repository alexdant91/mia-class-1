//1. Dichiariamo costanti statiche
const API_URL = "https://jsonplaceholder.typicode.com/photos";

//2. Selezioniamo elementi HTML
const $photosTbody = document.querySelector("#photos-tbody");
const $prevBtn = document.querySelector("#prev-page");
const $nextBtn = document.querySelector("#next-page");
const $currentPageSpan = document.querySelector("#current-page");
const $totalPagesSpan = document.querySelector("#total-pages");

//3. Settiamo lo state per centralizzare i dati
const state = {
    photos: [], //copia di rendering
    _photos: [], //coapia di cache
    paginationInfo: {
        limit: 10,
        page: 1,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false,
    }
};

//4. Otteniamo i dati dal server
const fetchData = async () => {
    try{
        const response = await fetch(API_URL);
        if(response.ok) {
            const result = await response.json();
            state._photos = result;
        } else {
            throw new Error(`Server error with status code ${response.status}`);
        }
    } catch(err){
        throw err;
    }
}

const paginateData = () => {
    state.paginationInfo.totalPages = Math.ceil(state._photos.length / state.paginationInfo.limit);
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);
    state.photos = [...state._photos].splice(startIndex, state.paginationInfo.limit);
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.totalPages;
}

const renderPagination = () => {
    $currentPageSpan.innerHTML = state.paginationInfo.page;
    $totalPagesSpan.innerHTML = state.paginationInfo.totalPages;

    if (state.paginationInfo.hasPrevPage) {
        $prevBtn.removeAttribute("disabled"); 
    } else {
        $prevBtn.setAttribute("disabled", true);
    }

    if (state.paginationInfo.hasNextPage) {
        $nextBtn.removeAttribute("disabled"); 
    } else {
        $nextBtn.setAttribute("disabled", true);
    }
}

const pagination = {
    prev: () => {
        if (state.paginationInfo.hasPrevPage) {
            state.paginationInfo.page -= 1;
        }
    },
    next: () => {
        if (state.paginationInfo.hasNextPage) {
            state.paginationInfo.page += 1;
        }
    }
}

//5. Renderizziamo i dati ottenuti
const generatephotoHTML = (photo) => {
    return `
        <tr>
            <td>${photo.albumId}</td>
            <td>${photo.id}</td>
            <td>${photo.title}
            <td>${photo.url}</td>
            <td>${photo.thumbnailUrl}</td>
        </tr>
    `
}

const render = () => {
    paginateData();
    renderPagination();

    const HTML = state.photos.map((photo) => generatephotoHTML(photo)).join("");

    $photosTbody.innerHTML = HTML;
}

const setEventListeners = () => {
    $nextBtn.addEventListener("click", () => {
        pagination.next();
        render();
    });

    $prevBtn.addEventListener("click", () => {
        pagination.prev();
        render();
    });
}

//6. Dichiariamo e eseguiamo la funzione di init
const init = async () => {
    await fetchData();
    render();
    setEventListeners();
}

init();