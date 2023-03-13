import mongoose from "mongoose"

const drinkSchema = new mongoose.Schema({
    drink: {
        type: Array,
        require: true,
        trim: true,
    }
})

export const Coctel = mongoose.model("Coctel", drinkSchema)