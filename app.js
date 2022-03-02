const express = require("express");
const path = require("path");
const mainRoute = require('./routes/mainRoute');
const productoRoute = require('./routes/productoRoute');

const app = express();
const rutaPublic = path.join(__dirname, "./public");
app.use(express.static(rutaPublic));

app.set('view engine','ejs');

app.listen(3005, () => {
    console.log("Servidor 3005 corriendo");
})

app.use(mainRoute);
app.use(productoRoute);