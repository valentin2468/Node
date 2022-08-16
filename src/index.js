const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require("./routes/user")

const app = express();
const port = 9000;

app.use('/api',userRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("conectado a la base de datos"))


app.listen(port, () => console.log(`Servidor escuchado en el puerto ${port}`))
