
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

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
    res.send('Not found')
});

app.listen(port, () => {
    console.log("Servidor levantado puerto 8080");
});