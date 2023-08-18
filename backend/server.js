const mongoose = require('mongoose')
const username = "jlipscomb071";
const password = "bKxZ3VWkDHej0iqP";
const cluster = "expenseexplorer";
const dbname = "test";


const url = `mongodb+srv://${username}:${password}@${cluster}.ubzdpot.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams);


const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", async function () {
    console.log("Connected successfully");
});