
const axios = require('axios');

class Search {

    history = ['BCN', 'Madrid', 'NY'];

    constructor() {
        
    }
    
    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        };
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
}

module.exports = Search;