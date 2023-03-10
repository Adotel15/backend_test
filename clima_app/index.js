
require('colors');
require('dotenv').config();

const {
    inquirerMenu,
    inquirerPause,
    readInput,
    listPlaces
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
                const places = await search.searchCity(city);
                const idSelected = await listPlaces(places);
                if(idSelected === '0') continue;

                const selectedPlace = places.find( item => item.id === idSelected );
                search.addHistory(selectedPlace.nombre)
                const clima = await search.placeClima(selectedPlace.lat, selectedPlace.lng)

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: '.blue, selectedPlace.nombre );
                console.log('Lat: '.blue, selectedPlace.lat );
                console.log('Lng: '.blue, selectedPlace.lng );
                console.log('Temperatura: '.blue, clima.temp );
                console.log('Máxima: '.blue, clima.max );
                console.log('Mínima: '.blue, clima.min );
                console.log('Como está el clima: '.blue, clima.desc )
                break;

            case 2:
                search.capitalizeHistory.forEach( (place, index) => {
                    const idx = `${index + 1}`.green;
                    console.log(`${idx} ${place}`)
                })
                break;

            default:
                break;
        }

        await inquirerPause();

    } while (opt !== 0)
}

main();