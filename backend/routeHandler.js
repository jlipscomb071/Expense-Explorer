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

// GET:
expressConnection.get(`/${collection}`, async (request, response) => {
    const entry = await schema.find({})

    try {
        response.send(entry)
        console.log("Sucessfully fetched entry")
    } catch(error){
        response.status(500).send(error)
        console.log("Error fetching entry: ", error)
    }
})

// PUT:
expressConnection.put(`/${collection}/:id`, async (request, response) => {
    const entryId = request.params.id
    const update = {
        checking: request.body.checking,
        savings: request.body.savings
    }
    try{
        const result =  await schema.findByIdAndUpdate(
            entryId,
            update)
        if(result !== null){ 
        console.log("Sucessfully updated entry: ", result)
        } else {
            console.log("Error: Entry Id doesn't exist, cannot update entry")
        }
    } catch(error){
        response.status(500).send(error)
        console.log("Error creating entry: ", error)
    }
}) 

// DELETE:
expressConnection.delete(`/${collection}/:id`, async (request, response) => {
    const entryId = request.params.id
    try{
        const result = await schema.findByIdAndDelete(entryId)
        if(result !== null){
        console.log("Successfully deleted entry: ", result)
        } else{
            console.log("Error: Entry Id doesn't exist, cannot delete entry")
        }
    } catch (error){
        response.status(500).send(error)
        console.log("Error deleting entry: ", error)
    }
})

export default expressConnection