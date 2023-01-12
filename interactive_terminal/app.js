
require('colors');
const { showMenu, pauseApp } = require('./helpers/messages');

const main = async () => {
    console.clear();

    let opt = "";

    do {
        opt = await showMenu();
        await pauseApp();
    } while(opt !== '0')
    
}

main();