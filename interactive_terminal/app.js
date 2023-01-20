
require("colors");
const { inquirerMenu, inquirerPause } = require("./helpers/inquirer.js");
const Task = require("./models/task.js");

const main = async () => {

    let opt = "";

    do {

        opt = await inquirerMenu();
        console.log({ opt });

        await inquirerPause();

    } while(opt !== '0')
    
}

main();