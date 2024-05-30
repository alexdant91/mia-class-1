const API_URL = "https://jsonplaceholder.typicode.com/posts";

const $tbody = document.querySelector("#tbody");

const state = {
    posts: [],
};

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, { method: "GET" });

        if (response.ok) {
            const data = await response.json();

            state.posts = data;
        } else {
            throw new Error(`Server error with code ${response.status}`);
        }
    } catch (error) {
        throw error;
    }
}

const generateHTML = (post) => {
    return `
    <tr>
        <td>${post.id}</td>
        <td>${post.userId}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
    </tr>
    `;
}

const render = () => {
    const HTML = state.posts.map((post) => generateHTML(post)).join("");

    $tbody.innerHTML = HTML;
}

const init = async () => {
    await fetchData();

    render();
}

init();