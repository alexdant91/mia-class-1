// Mapping operations
export const operationsMap = {
    SUM: (state) => {
        state.counter = state.counter + state.number;
    },
    REMOVE: (state) => {
        state.counter = state.counter - state.number;
    },
    MULTIPLY: (state) => {
        state.counter = state.counter * state.number;
    },
    DIVIDE: (state) => {
        state.counter = state.counter / state.number;
    },
}