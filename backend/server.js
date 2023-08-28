import express from "express"
import expressConnection from "./routeHandler.js"
import dotenv  from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import mongoose from "mongoose"
import cors from 'cors'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const envPath = path.resolve(dirname, '..', '.env')

dotenv.config({ path: envPath })

const username = process.env.VITE_USERNAME
const password = process.env.VITE_PASSWORD
const cluster =  process.env.VITE_CLUSTER
const dbname = process.env.VITE_DB

const url = `mongodb+srv://${username}:${password}@${cluster}.ubzdpot.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(url, connectionParams)
const connection = mongoose.connection

connection.on("error", console.error.bind(console, "connection error: "))
connection.once("open", async function () {
    console.log("Connected successfully");
})

app.use(expressConnection)

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})