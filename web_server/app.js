
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials')

// Static content
// .use (Para ejecutar middelwares)
// .get (para cuando se hacen peticiones al servidor en rutas concretas)
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Adrian',
        oficio: 'Software Developer',
        title: 'Testing HBS'

    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Adrian',
        oficio: 'Software Developer',
        title: 'Testing HBS'

    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Adrian',
        oficio: 'Software Developer',
        title: 'Testing HBS'

    });
});

app.get('*', (req, res) => {
    res.send('Not found')
});

app.listen(port, () => {
    console.log("Servidor levantado puerto 8080");
});