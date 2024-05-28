/**
 * Function to collect input value
 * @param {HTMLElement} $numberInput Selector for number input on page
 * @param {object} state state const to update status
 */
export const saveInitialNumberInputValue = ($numberInput, state) => {
    if (!$numberInput) throw new Error("`$numberInput` is required and must be an HTML element");
    if (!state) throw new Error("`state` is required");

    state.number = Number($numberInput.value);
}

/**
 * Function to get input value from "input" event
 * @param {InputEvent} event Input event shared by `$el.addEventListener()` callback
 * @param {object} state state const to update status
 */
export const saveNumberInputValue = (event, state) => {
    if (!event) throw new Error("`event` is required");
    if (!state) throw new Error("`state` is required");

    state.number = Number(event.target.value);
}

/**
 * Function to get select initial operation value
 * @param {HTMLElement} $operationSelect Selector for operations select on page
 * @param {object} state state const to update status
 */
export const saveInitialOperationSelectValue = ($operationSelect, state) => {
    if (!$operationSelect) throw new Error("`$numberInput` is required and must be an HTML element");
    if (!state) throw new Error("`state` is required");

    state.operation = $operationSelect.value;
}

/**
 * Function to get select initial operation value
 * @param {ChangeEvent} event Change event shared by `$el.addEventListener()` callback
 * @param {object} state state const to update status
 */
export const saveOperationSelectValue = (event, state) => {
    if (!event) throw new Error("`event` is required");
    if (!state) throw new Error("`state` is required");

    state.operation = event.target.value;
}

/**
 * Function to set listener on dynamic element
 * @param {HTMLElement} $element HTML generic selector
 * @param {string} eventName Name of event to pass to `$el.addEventListener()`
 * @param {function} callback Callback to pass to `$el.addEventListener()`
 * @example 
 * ```js
 * setLisener($numberInput, "input", (event) => {
 *      saveNumberInputValue(event, state);
 * });
 * ```
 */
export const setLisener = ($element, eventName, callback) => {
    if (!$element) throw new Error("`$element` must be an HTML element");
    if (!eventName || typeof eventName !== "string" || eventName === "") throw new Error("`eventName` is required and must be a valid string");
    if (!callback || typeof callback !== "function") throw new Error("`callback` is required and must be a valid function");
    
    $element.addEventListener(eventName, (event) => {
        callback(event);
    });
}