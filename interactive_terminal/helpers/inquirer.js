

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
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
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

const readInput = async message => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if( value.length === 0 ){
                    return 'Introduce un valor'
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc;
}

const listDelete = async tasks => {

    const choices = tasks.map( (task, index) => {

        const idx = `${index + 1}`.green

        return {
            value: task.id,
            name: `${idx}. ${task.desc}`
        }        
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione la tarea que quieres borrar:',
            choices
        }
    ]

    const { id } = await inquirer.prompt(question);
    return id;
}

const confirmDelete = async message => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question)
    return ok;
}

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  listDelete,
  confirmDelete
}
