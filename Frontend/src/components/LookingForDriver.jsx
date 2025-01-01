import React from 'react'

const LookingForDriver =  (props) => {

    const pickupaddress = props.pickup ;

    // Split the string at the first comma
    const [pickupfirstPart, ...pickupsecondPartArray] = pickupaddress.split(',');
    const pickupfirstString = pickupfirstPart.trim();
    const pickupsecondString = pickupsecondPartArray.join(',').trim();



    const destinationaddress = props.destination ;

    // Split the string at the first comma
    const [destinationfirstPart, ...destinationsecondPartArray] = destinationaddress.split(',');
    const destinationfirstString = destinationfirstPart.trim();
    const destinationsecondString = destinationsecondPartArray.join(',').trim();


  return (
    <div className='flex flex-col h-full w-full items-center justify-between overflow-auto gap-10'>
        <div className='flex flex-col p-5 bg-gray-100 rounded-3xl w-full h-full g-4 overflow-auto'>
            <div className="h-1/5 border-b-2 w-full bg-white rounded-t-xl flex flex-col items-center py-4 gap-5 justify-center">
                <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                <h2 className='text-black font-semibold text-4xl '>Looking for a Driver</h2>
            </div>


            {
                props.vehicleType === 'van' ? <img className='bg-white h-3/5 object-contain py-4 mt-2 object-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" /> :
                props.vehicleType === 'car' ? <img className='bg-white h-3/5 object-cover object-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1591275848/assets/57/348090-0115-46b7-96b3-b9085e736876/original/Comfort_Vehicle_list.png" alt="" /> :
                props.vehicleType === 'auto' ? <img className='bg-white h-3/5 object-contain py-4 mt-2 object-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" /> :
                props.vehicleType === 'bike' ? <img className='bg-white h-3/5 object-contain py-4 mt-2 object-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" /> :
                <div></div>
            }

            


            <div className="ride-info h-4/5 w-full bg-white rounded-b-xl px-4 py-8 flex flex-col gap-4 relative">
                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-map-pin-2-fill"></i></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-2xl font-semibold text-gray-800'>{pickupfirstString}</h2>
                        <h3 className='text-lg font-base text-gray-600 leading-6'>{pickupsecondString}</h3>
                    </div>
                </div>


                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-checkbox-blank-fill"></i></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-2xl font-semibold text-gray-800'>{destinationfirstString}</h2>
                        <h3 className='text-lg font-base text-gray-600 leading-6'>{destinationsecondString}</h3>
                    </div>
                </div>
                <div className="rounded-xl from flex items-center py-6 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16  rounded-full text-3xl flex items-center justify-center'><img className='scale-[2.5]' src="https://calltoinspiration.com/api/media?id=6444f3c77b0eb330e9db8700&asAttachment=false" alt="" /></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-3xl font-bold text-gray-800 font-mono'>₹{props.fare[props.vehicleType]}</h2>
                        <h3 className='text-xl font-base text-gray-600 leading-6 flex items-center gap-4'>After Ride <div className="dot h-2 w-2 bg-black rounded-full"></div> Cash or UPI</h3>
                    </div>
                </div>

                <button onDoubleClick={() => props.setRideAccepted(true)} className='bg-[black] text-white w-full py-3 text-3xl font-mono rounded-2xl font-semibold hover:bg-[red]'>Cancel Ride</button>

            </div>

        </div>
    </div>
  )
}

export default LookingForDriver