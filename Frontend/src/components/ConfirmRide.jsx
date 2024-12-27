import React from 'react'

const ConfirmRide = ( props ) => {
  return (
    <div className='flex h-full w-full items-center justify-between overflow-hidden gap-10'>
        <div className='flex flex-col p-5 bg-gray-100 rounded-t-3xl w-3/5 h-full g-4'>
            <div className="h-1/5 border-b-2 w-full bg-white rounded-t-xl flex flex-col items-center gap-5 justify-center">
                <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                <h2 className='text-black font-semibold text-4xl '>Confirm your Ride</h2>
            </div>

            <img className='h-4/5 object-cover object-center bg-white' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1591275848/assets/57/348090-0115-46b7-96b3-b9085e736876/original/Comfort_Vehicle_list.png" alt="" />


        </div>


        <div className="right p-5 flex flex-col items-start gap-1 bg-gray-100 w-2/5 h-full">
            <div className="h-1/5 border-b-2 w-full bg-white rounded-t-2xl flex flex-col items-center gap-5 justify-center">
                <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                <h2 className='text-black font-semibold text-3xl '>Ride Deatils</h2>
            </div>

            <div className="ride-info h-4/5 w-full bg-white rounded-b-xl px-4 py-8 flex flex-col gap-4 relative overflow-y-auto">
                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-map-pin-2-fill"></i></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-3xl font-bold text-gray-800'>NTPC Korba</h2>
                        <h3 className='text-lg font-semibold text-gray-600 leading-6'>Housing Board colony Jamnipali NTPC, Darri block, Korba, Chhattisgarh</h3>
                    </div>
                </div>

                <div className="line w-[15px] h-[90px] bg-gray-300 rounded-full absolute top-[105px] left-[73px]"></div>

                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-checkbox-blank-fill"></i></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-3xl font-bold text-gray-800'>The Palm Mall</h2>
                        <h3 className='text-lg font-semibold text-gray-600 leading-6'>TP Nagar, Korba block, Korba, Chhattisgarh</h3>
                    </div>
                </div>
                <div className="rounded-xl from flex items-center py-6 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16  rounded-full text-3xl flex items-center justify-center'><img className='scale-[2.5]' src="https://calltoinspiration.com/api/media?id=6444f3c77b0eb330e9db8700&asAttachment=false" alt="" /></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-4xl font-bold text-gray-800'>₹280.00</h2>
                        <h3 className='text-xl font-semibold text-gray-600 leading-6 flex items-center gap-4'>After Ride <div className="dot h-2 w-2 bg-black rounded-full"></div> Cash or UPI</h3>
                    </div>
                </div>

                <button onClick={() => props.setVehicleFound(true)} className='py-4 w-full bg-black text-white text-2xl font-bold rounded-xl'>Confirm</button>
            </div>

        </div>
    </div>
  )
}

export default ConfirmRide