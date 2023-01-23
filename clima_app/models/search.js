
const axios = require('axios');

class Search {

    history = ['BCN', 'Madrid', 'NY'];

    constructor() {
        
    }

    searchCity = async (nameCity = '') => {

        try {

            const { data } = axios.get('');
            return data;

        } catch(error) {
            return [];
        }
    } 
}

module.exports = Search;