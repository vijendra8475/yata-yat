const mapService = require('../Services/maps.service');

module.exports.getAddressCoordinate = async (req, res) => {
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