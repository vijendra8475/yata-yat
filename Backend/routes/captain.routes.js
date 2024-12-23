const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage("Email is not valid"),
    body('fullname.firstname').isLength({min : 3}).withMessage('FirstName mut be atleast 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage("Password must be atleast 5 characters"),
    body('vehicle.color').isLength({ min : 3}).withMessage("Vehicle color must be atleast 3 characters long"),
    body('vehicle.plate').isLength({ min : 3}).withMessage("Vehicle plate must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({ min : 1 }).withMessage('Vehicle min capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['Bike','Car','Auto-Riksha']).withMessage('Invalid Vehicle')
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage("Email is not valid"),
    body('password').isLength({ min: 5 }).withMessage("Password must be atleast 5 characters")
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router;