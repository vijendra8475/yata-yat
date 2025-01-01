import React from 'react'

const VehiclePanel = ( props ) => {

    const { distance } = props.fare;
    const { duration } = props.fare;

    // console.log(props.fare);
    
    

  return (
    <>
        <div className='w-full py-2 px-6 bg-gray-200 rounded-xl font-semibold'>Approxmate Distance:{(distance) ? distance.text : '0 Kms'}  covered in {(duration) ? duration.text : '0 mins'}</div>
        <div onClick={() => {
          props.setVehicleType('van')
          props.setConfirmRidePanel(true)
        }} className="hover:border-gray-700 bg-gray-100 border-2 rounded-lg w-full flex items-center justify-evenly">
                  <img className='w-56 object-cover object-center mr-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
                  <div className='flex flex-col items-start mr-10'>
                      <h3 className='font-bold text-3xl text-gray-900 '>Uber Go <span><i className="ri-user-fill text-2xl"></i> 6</span></h3>
                      <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-600 font-mono'>2 mins away <div className='h-2 w-2 bg-gray-900 flex rounded-full'></div><span> 15:24 </span></h2>
                      <h2 className='text-lg text-gray-500 font-medium'>Affordable, Compact ride</h2>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className='font-bold text-3xl font-mono'>₹{props.fare.van}</div>
                  </div>
        </div>

        <div onClick={() => {
          props.setVehicleType('car')
          props.setConfirmRidePanel(true)
          
        }} className="hover:border-gray-700 bg-gray-100 border-2 rounded-lg w-full flex items-center justify-evenly">
                  <img className='w-56 object-cover scale-150 object-center mr-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1591275848/assets/57/348090-0115-46b7-96b3-b9085e736876/original/Comfort_Vehicle_list.png" alt="" />
                  <div className='flex flex-col items-start mr-10'>
                      <h3 className='font-bold text-3xl text-gray-900 '>Premier <span><i className="ri-user-fill text-2xl"></i> 4</span></h3>
                      <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-600 font-mono'>5 mins away <div className='h-2 w-2 bg-gray-900 flex rounded-full'></div><span> 15:25 </span></h2>
                      <h2 className='text-lg text-gray-500 font-medium flex-wrap leading-5'>Comfortable sedans,<br /> top-quality drivers</h2>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className='font-bold text-3xl font-mono'>₹{props.fare.car}</div>
                  </div>
        </div>
              
        <div onClick={() => {
          props.setVehicleType('auto')
          props.setConfirmRidePanel(true)
        }} className="hover:border-gray-700 bg-gray-100 border-2 rounded-lg w-full flex items-center justify-evenly">
                  <img className='w-56 scale-75 py-4 object-cover object-center mr-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                  <div className='flex flex-col items-start mr-10'>
                      <h3 className='font-bold text-3xl text-gray-900 '>Tuk-Tuk<span><i className="ri-user-fill text-2xl"></i> 2</span></h3>
                      <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-600 font-mono'>2 mins away <div className='h-2 w-2 bg-gray-900 flex rounded-full'></div><span> 15:24 </span></h2>
                      <h2 className='text-lg text-gray-500 font-medium'>Affordable, Auto ride</h2>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className='font-bold text-3xl font-mono'>₹{props.fare.auto}</div>
                  </div>
        </div>

        <div onClick={() => {
          props.setVehicleType('bike')
          props.setConfirmRidePanel(true)
        }} className="hover:border-gray-700 bg-gray-100 border-2 rounded-lg w-full flex items-center justify-evenly">
                  <img className='w-56 scale-75 object-cover object-center mr-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                  <div className='flex flex-col items-start mr-10'>
                      <h3 className='font-bold text-3xl text-gray-900 '>Moto <span><i className="ri-user-fill text-2xl"></i> 1 </span></h3>
                      <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-600 font-mono'>2 mins away <div className='h-2 w-2 bg-gray-900 flex rounded-full'></div><span> 15:24 </span></h2>
                      <h2 className='text-lg text-gray-500 font-medium'>Affordable, Motorcycle ride</h2>
                  </div>
                  <div className='flex flex-col items-end'>
                    <div className='font-bold text-3xl font-mono'>₹{props.fare.bike}</div>
                  </div>
        </div>
    </>
  )
}

export default VehiclePanel