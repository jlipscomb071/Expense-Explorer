import fetch from 'node-fetch'
import { collection } from './schemas/defaultSchema.js'

//POST TEST:
const body = {
    checking: 100,
    savings: 8500
}

fetch(`http://localhost:3000/${collection}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
})
.then((json) => {
    if (json["code"] == 11000) {
        let val = Object.keys(json["keyValue"])[0]
        console.log(`${val} is already used`)
    } else {
        console.log("POST request succeeded:", json)
    }
})
.catch((error) => {
    console.error("POST request failed:", error)
})
