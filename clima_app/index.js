
require('colors');
require('dotenv').config();

const {
    inquirerMenu,
    inquirerPause,
    readInput 
} = require("./helpers/inquirer");

const Search = require('./models/search');

const main = async () => {

    let opt;
    const search = new Search();

    do {
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                const city = await readInput('Ciudad: ');

                await search.searchCity(city);

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad', );
                console.log('Lat', );
                console.log('Lng:', );
                console.log('Temperatura: ', );
                console.log('Máxima: ', );
                console.log('Mínima: ', );
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