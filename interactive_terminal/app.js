
require("colors");

const { 
    inquirerMenu,
    inquirerPause,
    readInput
} = require("./helpers/inquirer.js");
const Tasks = require("./models/tasks.js");
const { saveDB, readDb } = require("./helpers/saveFile");

const main = async () => {

    let opt = "";
    const tasks = new Tasks();
    const tasksDB = readDb(); 

    if(tasksDB) {
        
    }


    do {

        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc);
                break;

            case '2':
                console.log( tasks.getTasks )
                break;
            
            case '3':
                break;

            case '4':
                break;

            case '5':
                break;

            case '6':
                break;
            
            default:
                break;
        }

        saveDB( tasks.getTasks );
       
        await inquirerPause();

    } while(opt !== '0')
    
}

main();