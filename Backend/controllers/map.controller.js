const mapService = require('../Services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {

    const errors = validationResult(req);
    // if(errors){
    //     return res.status(404).json({errors : errors.array()});
    // }

    const address = req.query.address;
    if (!address) {
        return res.status(400).json({ message: 'Address is required' });
    }

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}



module.exports.getDistanceTime = async (req, res, next) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json({ error : error.array() })
        }

        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
        
    } catch (err) {
        console.log(err);
        res.status(404).json({message : 'Internal server error'});
    }   
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json({ error : error.array() })
        }

        const { input } = req.query;
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
        
    }catch(err) {
        console.log(err);
        res.status(404).json({message : 'Internal server error'});
    }
}