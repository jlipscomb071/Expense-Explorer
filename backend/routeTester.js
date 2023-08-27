import fetch from 'node-fetch'
import { collection } from './schemas/defaultSchema.js'

// const body = {
//    checking: 100,
//    savings: 8500
// }
// const controller = new AbortController();
// const signal = controller.signal;

//POST TEST:
// const fetchPromise = fetch(`http://localhost:3000/${collection}`, {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//     signal
// })
// .then((response) => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//     }
//     return response.json()
// })
// .then((json) => {
//     if (json["code"] == 11000) {
//         let val = Object.keys(json["keyValue"])[0]
//         console.log(`${val} is already used`)
//     } else {
//         console.log("POST request succeeded:", json)
//     }
// })
// .catch((error) => {
//     console.error("POST request failed:", error)
// })

// GET TEST:
// const fetchPromise = fetch(`http://localhost:3000/${collection}`)
// .then((response) => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//     }
//     return response.json()
// })
// .then((json) => {
//     console.log("GET request succeeded:", json)
// })
// .catch((error) => {
//     console.error("GET request failed:", error)
// })

// PUT TEST:
// const bodyUpdate = {
//     checking: 700,
//     savings: 10000
// };

// const entryId = "64eb8655f8dc3d02e0480cf2";
// const url = `http://localhost:3000/${collection}/${entryId}`;

// const fetchPromise = fetch(url, {
//     method: "PUT",
//     body: JSON.stringify(bodyUpdate),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//     signal
// });

// DELETE TEST:
// const entryId = "64eb8655f8dc3d02e0480cf3"
// const fetchPromise = fetch(`http://localhost:3000/${collection}/${entryId}`, {
//     method: "DELETE",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//     signal
// })

// ENSURE TIMEOUT:
// const timeoutPromise = new Promise((resolve) => setTimeout(() => {
//     controller.abort(); 
//     resolve({ timeout: true });
// }, 5000));

// Promise.race([
//     fetchPromise,
//     timeoutPromise
// ])
//     .then((result) => {
//         if (result.timeout) {
//         } else {
//             return result.json();
//         }
//     })
//     .catch((error) => {
//     });
