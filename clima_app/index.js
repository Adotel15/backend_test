
const {
    inquirerMenu,
    inquirerPause,
    readInput 
} = require("./helpers/inquirer");

const main = async () => {

    let opt;

    do {
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                console.log('1');
                break;
            case 2:
                console.log('2');
                break;
            default:
                break;
        }

        await inquirerPause();
        
    } while (opt !== 0)
}

main();