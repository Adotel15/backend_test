
const { crearTabla } = require('./helpers/multiplicar')

console.clear();

// process.argv es lo que lee lo que viene del input de la consola
const [,, arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');


crearTabla(base)
    .then( result => console.log(result))
    .catch( error => console.log(error))
