const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Pickup location is required'),
    body('destination').isString().isLength({ min: 3 }).withMessage('destination location is required'),
    body('vehicleType').isString().isIn(['auto', 'car', 'bike', 'van']).withMessage('Vehicle type is required'),
    rideController.createRide
)


router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Pickup location is required'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination location is required'),
    rideController.getFare
)


module.exports = router;