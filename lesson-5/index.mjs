import { operationsMap } from "./lib/operations.mjs";
import { 
    saveInitialNumberInputValue, 
    saveInitialOperationSelectValue, 
    saveNumberInputValue, 
    saveOperationSelectValue,
    setLisener,
} from "./lib/utils.mjs";

const $counterSpan = document.querySelector("#counter");
const $numberInput = document.querySelector("#number");
const $operationSelect = document.querySelector("#operation");
const $addBtn = document.querySelector("#add");

const state = {
    number: 1,
    counter: 0,
    operation: null,
}

// Function to update counter value
const updateCounter = () => {
    if (state.number == "" || state.number < 0) {
        return;
    }

    operationsMap[state.operation](state);
}

// Function to render counter on page
const renderCounter = () => {
    $counterSpan.innerHTML = state.counter;
}

// Function to collect initial values
const initValues = () => {
    saveInitialOperationSelectValue($operationSelect, state);
    saveInitialNumberInputValue($numberInput, state);
}

// Function to set all event listeners
const initEventListeners = () => {
    setLisener($numberInput, "input", (event) => {
        saveNumberInputValue(event, state);
    });

    setLisener($operationSelect, "change", (event) => {
        saveOperationSelectValue(event, state);
    });

    setLisener($addBtn, "click", () => {
        updateCounter();
        renderCounter();
    });
}

// Function to initilize code
const init = () => {
    // Save all initial value on state
    initValues();
    // Render all we need on page
    renderCounter();
    // Init all event listeners
    initEventListeners()
}

// Call init
init();