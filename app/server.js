const express = require("express");

const app = express();

let personas = [
    {id: 1, nombre: "Juan", apellido: "soto"},
    {id: 2, nombre: "Miguel", apellido: "soto"},
    {id: 3, nombre: "Marta", apellido: "soto"},
    {id: 4, nombre: "Jaime", apellido: "soto"},
]

app.get("/api/personas", (req, res) => {
    res.json(personas);
});

app.all("*", (req, res) => {
    res.status(404).send("Ruta desconocida.");
});

module.exports = app;