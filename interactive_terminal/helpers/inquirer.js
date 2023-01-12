
require('colors');

const inquirer = require('inquirer');

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async() => {

    console.clear()
    console.clear();
    console.log('=========================='.green);
    console.log('  Selecciona una opción   '.green);
    console.log('==========================\n'.green);

    return await inquirer.prompt(menuOpts);
} 

module.exports = {
    inquirerMenu
}