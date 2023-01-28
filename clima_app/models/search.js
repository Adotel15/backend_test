
const axios = require('axios');

class Search {

    history = ['BCN', 'Madrid', 'NY'];

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
                desc: weather.description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            } 

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Search;