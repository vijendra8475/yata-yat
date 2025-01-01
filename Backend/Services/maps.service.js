const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API; // Replace with your actual Google Maps API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to find the address');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error occurred while fetching the coordinates');
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin && !destination) {
        throw new Error('Origin and Destinations are required')
    }
     const apiKey = process.env.GOOGLE_MAPS_API;
     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;


     try {
        const response = await axios.get(url);
        if(response.data.status == "OK"){

            if(response.data.rows[0].elements[0] === 'ZERO_RESULTS'){
                throw new Error('No routes found')
            }

            return response.data.rows[0].elements[0];
        }
        else {
            throw new Error('Unable to find the distance and time');
        }
        
     } catch (error) {
        console.error(error);
        throw error;
     }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) {
        throw new Error('Input is required')
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if(response.data.status == "OK") {
            return response.data.predictions;
        } else {
            throw new Error('Unable to find the suggestions');
        }
    }catch(error) {
        console.error(error);
        throw error;
    }
}

module.exports.getCaptainInTheRadius = async (ltd, lgt, radius) => {
    const captain = await captainModel.find({
        location : {
            $geoWithIn : {
                $centerSphere : [ [ ltd, lng ], radius / 3963.2 ],
            }
        }
    })
}