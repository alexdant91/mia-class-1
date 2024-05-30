import { generateTbodyHTML, generaterTheadHTML } from "./lib/utils.mjs";
import { DEFAULT_INIT_OPTIONS } from "./lib/config.mjs";

let $thead;
let $tbody;

const state = {
    data: null,
}

const fetchData = async (url) => {
    if (!url) throw new Error("url is required");

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            state.data = data;
        } else {
            throw new Error(`Server error with code ${response.status}`);
        }
    } catch (error) {
        throw error;
    }
}

const selectTheadELEMENT = (selector) => {
    $thead = document.querySelector(selector);
}

const selectTbodyELEMENT = (selector) => {
    $tbody = document.querySelector(selector);
}

const setOptions = (options = { ...DEFAULT_INIT_OPTIONS }) => {
    if (!options.theadSelector || typeof options.tbodySelector !== "string") throw new Error("theadSelector option is required");
    if (!options.tbodySelector || typeof options.tbodySelector !== "string") throw new Error("tbodySelector option is required");

    selectTheadELEMENT(options.theadSelector);
    selectTbodyELEMENT(options.tbodySelector);
}

const renderThead = () => {
    const keys = Object.keys(state.data[0]);

    const HTML = generaterTheadHTML(keys);

    $thead.innerHTML = HTML;
}

const renderTbody = () => {
    const HTML = state.data.map((item) => generateTbodyHTML(item)).join("");

    $tbody.innerHTML = HTML;
}

const render = () => {
    renderThead();
    renderTbody();
}

export const initTable = async (url, options) => {
    setOptions(options);
    await fetchData(url);
    render();
}