//* setInterval(); -> Mi permette di eseguire una funziona ad intervalli di tempo regolare

// let counter = 0;
// const interval = setInterval(() => {
//     if (counter < 10) {
//         counter++;
//         console.log(counter)
//     } else {
//         clearInterval(interval);
//     }
// }, 1000);

// console.log("AFTER");

//* setTimeout(); -> Mi permette di eseguire una funzione con un ritardo di tempo definito

// const timeout = setTimeout(() => {
//     console.log("DONE")
// }, 500);

// clearTimeout(timeout);

// const nextTick = (callback) => {
//     return setTimeout(callback, 1);
// }

// nextTick(() => {
//     console.log("FIRST")
// });

// nextTick(() => {
//     console.log("SECOND")
// });

//* Promise();

// const myAsyncFn = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number > 9) {
//             return resolve(number + 1);
//         } else {
//             return reject(new Error("Number must be greater than 9"));
//         }
//     });
// }

//* then().catch();

// myAsyncFn(10).then((result) => {
//     console.log(result);
//     return myAsyncFn(result) // 11
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     throw error;
// }).finally(() => {
//     console.log("DONE!")
// });

//* async/await -> try/catch;

// const fn = async () => {
//     try {
//         const result1 = await myAsyncFn(10);
//         const result2 = await myAsyncFn(result1);

//         console.log(result1);
//         console.log(result2);
//     } catch (error) {
//         throw error;
//     } finally {
//         console.log("DONE!")
//     }
// }

// fn();

//* fetch();

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "GET", // GET | POST | PUT | PATCH | DELETE
//             // headers: {
//             //     "Conetent-Type": "application/json",
//             //     "Authorization": "Bearer jgui2hgy89olmnbvfdr5678ikmnbvcdr5678iuyrdfhuioplmshy"
//             // },
//             // body: JSON.stringify({
//             //     name: "Ale",
//             //     age: 32
//             // })
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//         } else {
//             console.log("ERROR:", response.status);
//         }

//     } catch (error) {
//         throw error;
//     }
// }

// fetchData();