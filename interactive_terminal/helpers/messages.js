
// Menu hecho a mano, solo como ejemplo 

require('colors');

const showMenu = async () => {

    return new Promise( resolve => {

        console.clear();
        console.log('=========================='.green);
        console.log('  Selecciona una opción   '.green);
        console.log('==========================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);   
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opción:', (ans) => {
            readLine.close();
            resolve(ans);
        })
    })
}

const pauseApp = async () => {

    return new Promise( resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, () => {
            readLine.close();
            resolve();
        })
    })
}

module.exports = {
    showMenu,
    pauseApp
}