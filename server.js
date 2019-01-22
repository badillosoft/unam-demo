const http = require("http");
const express = require("express");

const app = express();

app.use("/", express.static("public"));

app.get("/hola", function (req, res) {
    res.send(`hola ${new Date()}`);
});

http.createServer(app).listen(9801, function () {
    console.log("Se ha inciado el servidor en http://localhost:3000/");
    console.log("Presiona ctl+c para salir");
});