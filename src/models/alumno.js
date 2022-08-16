const mongoose = require("mongoose");
const alumnoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
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
});

module.exports = mongoose.model('Alumno', alumnoSchema);