

const { crearTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

// process.argv es lo que lee lo que viene del input de la consola
// const [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');


crearTabla(argv.base, argv.listar)
    .then( result => console.log(result))
    .catch( error => console.log(error))
