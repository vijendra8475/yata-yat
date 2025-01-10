const rideService = require('../Services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../Services/maps.service');
const { sendMessageToSocketId } = require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

     try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);



        const captainsInRadius = await mapService.getCaptainInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2000);
        // console.log(captainsInRadius);

        ride.otp = "";

        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');        

        captainsInRadius.map(async captain => {
            sendMessageToSocketId(captain.socketId, {
                event : 'new-ride',
                data : rideWithUser
            })
        })



    } catch (err) {
        console.log(err);        
        return res.status(500).json({ message: err.message });
    }
}

module.exports.getFare = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(404).json({ errors : errors.array() });
    }

    const { pickup, destination } = req.query;

    try {

        console.log(pickup, destination);
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {

        console.log(pickup, destination);
        res.status(401).json({ message: error.message });
    }
}

module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain._id });
        
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })
        return res.status(200).json(ride);

    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}