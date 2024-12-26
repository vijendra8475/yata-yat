import React from 'react'

const ConfirmRide = () => {
  return (
    <div className='flex h-full w-full items-center justify-between overflow-hidden gap-10'>
        <div className='flex flex-col p-5 bg-gray-100 rounded-t-3xl w-3/5 h-full g-4'>
            <div className="h-1/5 border-b-2 w-full bg-white rounded-t-xl flex flex-col items-center gap-5 justify-center">
                <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                <h2 className='text-black font-semibold text-4xl '>Looking for nearby Drivers</h2>
            </div>

            <img className='h-4/5 object-cover object-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />


        </div>


        <div className="right p-5 flex flex-col items-start gap-1 bg-gray-100 w-2/5 h-full">
            <div className="h-1/5 border-b-2 w-full bg-white rounded-t-2xl flex flex-col items-center gap-5 justify-center">
                <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                <h2 className='text-black font-semibold text-3xl '>Ride Deatils</h2>
            </div>

            <div className="ride-info h-4/5 w-full bg-white rounded-b-xl px-4 py-8 flex flex-col gap-4 relative">
                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i class="ri-map-pin-2-fill"></i></h1>
                    <div className="info flex flex-col items-start w-3/5">
                        <h2 className='text-3xl font-bold text-gray-800'>NTPC Korba</h2>
                        <h3 className='text-lg font-semibold text-gray-600 leading-6'>Housing Board colony Jamnipali NTPC, Darri block, Korba, Chhattisgarh</h3>
                    </div>
                </div>

                <div className="line w-[15px] h-[90px] bg-gray-300 rounded-full absolute top-[105px] left-[73px]"></div>

                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i class="ri-checkbox-blank-fill"></i></h1>
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
            </div>

        </div>
    </div>
  )
}

export default ConfirmRide