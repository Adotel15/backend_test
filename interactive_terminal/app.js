
require('colors');

const { inquirerMenu } = require('./helpers/inquirer');
//const { showMenu, pauseApp } = require('./helpers/messages');

const main = async () => {
    console.clear();

    let opt = "";

    do {
        opt = await inquirerMenu();
        // if( opt !== '0') await pauseApp();
    } while(opt !== '0')
    
}

main();