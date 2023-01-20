

require("colors");

const inquirer = require("inquirer");

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const pauseOpt = [
    {
        type: 'input',
        name: 'pauseOpt',
        message: `Presione ${'ENTER'.green} para continuar\n`,
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Selecciona una opción   '.white);
    console.log('==========================\n'.green);

    const { opt } =  await inquirer.prompt(menuOpts);
    return opt;
} 

const inquirerPause = async () => {

    console.log('\n')
    await inquirer.prompt(pauseOpt)

}

module.exports = {
  inquirerMenu,
  inquirerPause
}
