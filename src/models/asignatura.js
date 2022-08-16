const mongoose = require("mongoose");

const asignaturaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    modulo: {
        type: String,
        required: true
    },
    curso: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Asignatura",asignaturaSchema);