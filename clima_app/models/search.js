
const axios = require('axios');

class Search {

    history = [];

    constructor() {}
    
    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        };
    }

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'lang': 'es',
            'units': 'metric'
        }
    }

    searchCity = async (nameCity = '') => {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${nameCity}.json`,
                params: this.paramsMapBox
            })
            
            const { data } = await instance.get();
            return data.features.map( city => ({
                id: city.id,
                nombre: city.place_name,
                lng: city.center[0],
                lat: city.center[1]
            }))

        } catch(error) {
            return [];
        }
    }

    async placeClima(lat, lon) {

        try {

            const instance = axios.create({
                baseURL:  `https://api.openweathermap.org/data/2.5/weather?`,
                params:{ ...this.paramsOpenWeather, lat, lon }
            });

            const { data } = await instance.get();
            const { weather, main } = data

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            } 

        } catch (error) {
            console.log(error)
        }
    }

    addHistory = (place = '') => {
        this.history.unshift(place);
    }
}

module.exports = Search;