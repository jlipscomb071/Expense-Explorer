import express from "express"
import schema from "./schemas/defaultSchema.js"
import { collection } from './schemas/defaultSchema.js'

const expressConnection = express()

console.log("Entered Routes")


// POST:
expressConnection.post(`/${collection}`, async (request, response) => {
    const entry = new schema(request.body)
    try{
        await entry.save();
        response.send(entry)
        console.log("Successfully created entry")
    } catch(error){
        response.status(500).send(error)
        console.log("Error creating entry: ", error)
    }
})

export default expressConnection