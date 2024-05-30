export const generaterTheadHTML = (keys) => {
    return `
        <tr>
            ${keys.map((key) => `<th>${key}</th>`).join("")}
        </tr>
    `;
}

export const generateTbodyHTML = (item) => {
    return `
        <tr>
            ${Object.values(item).map((value) => {
                if (typeof value !== "object") {
                    return `<td>${value}</td>`
                } else if (Array.isArray(value)) {
                    return `<td>NESTED ARRAY</td>`
                } else {
                    return `<td>${Object.entries(value)[0][1]}</td>`
                }
            }).join("")}
        </tr>
    `
}