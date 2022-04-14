const express = require("express");
const path = require("path");
const indexRouter = require('./routes/indexRouter')
const methodOverride =  require('method-override')
const bp = require('body-parser')
const session = require('express-session');



const app = express();
const rutaPublic = path.join(__dirname, "./public");
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static(rutaPublic));
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.use(session({secret: 'Argentium Mensaje'}));

app.listen(3005, () => {
    console.log("Servidor 3005 corriendo");
})

app.use(indexRouter);
