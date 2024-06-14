export const internalMemory = {
    save: (key, payload) => {
        localStorage.setItem(key, JSON.stringify(payload));
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
}