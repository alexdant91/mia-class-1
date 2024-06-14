const HTML_TODO_TEMPLATE = `
<div class="flex mb-4 items-center">
    <p class="w-full %__TITLE_CLASS__% text-grey-darkest">%__TITLE__%</p>
    <button data-id="%__TODO_ID__%" class="todo-change-status flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">%__BUTTON_NAME__%</button>
    <button data-id="%__TODO_ID__%" class="todo-remove flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
</div>
`;
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const $createTodoForm = document.querySelector("#create-todo");
const $todosDiv = document.querySelector("#todos");

const state = {
    todos: []
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);

        if(response.ok) {
            state.todos = await response.json();
        } else {
            throw new Error("Internal server error");
        }
    } catch (err) {
        throw err
    }
}

const generateTodoHTML = (todo) => {
    let HTML = HTML_TODO_TEMPLATE;
    HTML = HTML.replaceAll(/%__TITLE__%/gm, todo.title);
    HTML = HTML.replaceAll(/%__TITLE_CLASS__%/gm, todo.completed ? "line-through" : "");
    HTML = HTML.replaceAll(/%__BUTTON_NAME__%/gm, todo.completed ? "Undone" : "Done");
    HTML = HTML.replaceAll(/%__TODO_ID__%/gm, todo.id);

    // console.log(HTML);
    return HTML;
}

const render = () => {
    const HTML = state.todos.map((todo) => generateTodoHTML(todo)).join("");

    $todosDiv.innerHTML = HTML;
}

const setEventListeners = () => {
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("todo-change-status")) {
            const id = e.target.dataset.id;
            const todoIndex = state.todos.findIndex((todo) => todo.id == id);
            if(todoIndex < 0) {
                return;
            }
            state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
            render();
        } else if (e.target.classList.contains("todo-remove")) {
            const id = e.target.dataset.id;
            state.todos = state.todos.filter((todo) => todo.id != id);
            render();
        }
    })
}

const init = async () => {
    await fetchData();
    render();
    setEventListeners();
}

init();