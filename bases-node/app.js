
const { crearTabla } = require('./helpers/multiplicar')

const argv = require('yargs')
                .option('b', 
                {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',
                {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN(argv.b) ) throw 'La base tiene que ser un número';
                    return true;
                })
                .argv

console.clear();

// process.argv es lo que lee lo que viene del input de la consola
// const [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');


crearTabla(argv.base, argv.listar)
    .then( result => console.log(result))
    .catch( error => console.log(error))
