
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

    if(tasksDB) tasks.loadTasks(tasksDB);
    
    do {

        opt = await inquirerMenu();  

        switch(opt) { 
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc);
                break;

            case '2':
                tasks.allList();
                break;
            case '3':
                tasks.listPendingCompleted(true)
                break;

            case '4':
                tasks.listPendingCompleted(false);
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