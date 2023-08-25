const dotenv = require("dotenv")
const path = require("path")
const { fileURLToPath } = require('url');
const envPath = path.resolve(__dirname, '..', '.env')

dotenv.config({ path: envPath })

const mongoose = require('mongoose')
const username = process.env.VITE_USERNAME
const password = process.env.VITE_PASSWORD
const cluster =  process.env.VITE_CLUSTER
const dbname = process.env.VITE_DB


const url = `mongodb+srv://${username}:${password}@${cluster}.ubzdpot.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams)


const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error: "))
connection.once("open", async function () {
    console.log("Connected successfully");
})