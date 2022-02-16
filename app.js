const express = require("express");
const path = require("path");
const app = express();
const patheoPublic = path.join(__dirname, "./public");
app.use(express.static(patheoPublic));

app.listen(3005, () => {
    console.log("Servidor 3005 corriendo");
})

app.get("/", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/home.html");
    res.sendFile(patheoGet);
})

app.get("/register.html", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/register.html");
    res.sendFile(patheoGet);
})

app.get("/detailProduct.html", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/detailProduct.html");
    res.sendFile(patheoGet);
})

app.get("/login.html", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/login.html");
    res.sendFile(patheoGet);
})