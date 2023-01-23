

require("colors");

const inquirer = require("inquirer");

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
  
            {
                value: 0,
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

const listPlaces = async places => {

    const choices = places.map( (place, index) => {

        const idx = `${index + 1}`.green

        return {
            value: place.id,
            name: `${idx}. ${place.nombre}`
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
            message: 'Seleccione la ciudad: ',
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

const listCheck = async tasks => {

    const choices = tasks.map( (task, index) => {

        const idx = `${index + 1}`.green

        return {
            value: task.id,
            name: `${idx}. ${task.desc}`,
            checked: task.completedIn ? true : false
        }        
    })


    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones:',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question);
    return ids;
}

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  listPlaces,
  confirmDelete,
  listCheck
}
