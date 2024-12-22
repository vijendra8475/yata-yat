const captainModel = require('../models/captain.model');


// module.exports.createCaptain = async({
//     firstname, lastname, email, password,
//     color, plate, capacity, vehicleType
// }) => {
//     if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
//         console.log(firstname, lastname, email, password, color, plate, capacity, vehicleType);
        
//         throw new Error('All Fields are required')
//     }

//     const captain = captainModel.create({
//         fullname : {
//             firstname : firstname,
//             lastname : lastname
//         },
//         email,
//         password,
//         vehicle : {
//             color,
//             plate,
//             capacity,
//             vehicleType
//         }
//     })

//     return captain;
// }




module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        console.log(firstname, lastname, email, password, color, plate, capacity, vehicleType);
        
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}