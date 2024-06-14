//1. Dichiariamo costanti statiche
const API_URL = "https://jsonplaceholder.typicode.com/comments";

//2. Selezioniamo elementi HTML
const $commentsTbody = document.querySelector("#comments-tbody");
const $prevBtn = document.querySelector("#prev-page");
const $nextBtn = document.querySelector("#next-page");
const $currentPageSpan = document.querySelector("#current-page");
const $totalPagesSpan = document.querySelector("#total-pages");

//3. Settiamo lo state per centralizzare i dati
const state = {
    comments: [],
    _comments: [],
    paginationInfo: {
        limit: 20,
        page: 1,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false
    },
};

//4. Otteniamo i dati dal server
const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        if(response.ok) {
            const result = await response.json();
            // console.log(result);
            state._comments = result;
        } else {
            throw new Error(`Server error with status code ${response.status}`);
        }
    } catch (err) {
        throw err
    }
}

const paginateData = () => {
    state.paginationInfo.totalPages = Math.ceil(state._comments.length / state.paginationInfo.limit);
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);
    state.comments = [...state._comments].splice(startIndex, state.paginationInfo.limit);
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
const generateCommentHTML = (comment) => {
    return `
        <tr>
            <td>${comment.postId}</td>
            <td>${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>       
            <td>${comment.body}</td>
        </tr>
    `
}

const render = () => {

    paginateData();
    renderPagination();

    const HTML = state.comments.map(comment => generateCommentHTML(comment)).join("");
    // console.log(HTML);

    $commentsTbody.innerHTML = HTML;
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

init()