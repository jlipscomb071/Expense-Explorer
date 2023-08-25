import mongoose from "mongoose"

export const collection = "test1";


const defaultSchema = new mongoose.Schema({
    checking: {
        type: Number,
        required: true
    },
    savings : {
        type: Number,
        required: true
    }
})

const schema = mongoose.model(collection, defaultSchema);

export default schema