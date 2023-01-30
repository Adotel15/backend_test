
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Home page")
});

app.get('/home', (req, res) => {
    res.send("Home ruta")
});

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})
app.listen(port, () => {
    console.log("Servidor levantado puerto 8080");
});