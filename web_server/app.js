
const express = require('express');
const app = express();
const port = 8080;

// Static content
// .use (Para ejecutar middelwares)
// .get (para cuando se hacen peticiones al servidor en rutas concretas)
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.send("Home page")
});

app.get('/home', (req, res) => {
    res.send("Home ruta")
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log("Servidor levantado puerto 8080");
});