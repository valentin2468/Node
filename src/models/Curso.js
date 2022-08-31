const mongoose = require("mongoose");

const cursoSchema = mongoose.Schema({
    año: {
        type: Number,
        required: true
    },
    modulo: {
        type: String,
        required: true
    }
})