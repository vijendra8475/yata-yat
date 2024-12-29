import React from 'react'

const RidePopup = ( props ) => {
  return (
    
        <div className="w-1/3 overflow-y-auto h-full">
            <div className='flex flex-col px-5 py-3 bg-gray-100 rounded-3xl w-full h-full g-4 overflow-auto '>
                <div className="h-1/5 border-b-2 w-full bg-white rounded-t-xl flex flex-col items-center py-4 gap-5 justify-center">
                    <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                    <h2 className='text-black font-semibold text-4xl '>New Ride Arrived!</h2>
                </div>

                <div className='bg-white h-4/5 w-full flex-flex-col items-center'>
                    <div className='bg-white h-4/5 w-full flex items-center py-6 pt-10 justify-evenly'>
                            <img className='object-center h-48 relative left-12 object-cover ' src="https://cdn-icons-png.freepik.com/512/219/219988.png" alt="" />
                            <div className='h-48 w-48 rounded-full bg-blue-400 relative right-12 text-8xl font-semibold flex items-center justify-center text-white font-mono'> +2</div>
                    </div>
                    <h2 className='text-center text-xl font-semibold'>Santh + 2 Others</h2>
                    <h2 className='text-center text-base'>Approx. 7.8Kms distance</h2>
                </div>


                <div className="ride-info h-4/5 w-full bg-white rounded-b-xl px-4 py-5 flex flex-col gap-4 relative">
                    <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                        <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-map-pin-2-fill"></i></h1>
                        <div className="info flex flex-col items-start w-4/5">
                            <h2 className='text-xl font-semibold text-gray-800'>NTPC Korba</h2>
                            <h3 className='text-base font-semibold text-gray-600 leading-5'>Housing Board colony Jamnipali NTPC, Darri block, Korba, Chhattisgarh</h3>
                        </div>
                    </div>

                    <div className="line w-[15px] h-[65px] bg-gray-300 rounded-full absolute top-[100px] left-[71px]"></div>

                    <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12">
                        <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-checkbox-blank-fill"></i></h1>
                        <div className="info flex flex-col items-start w-4/5">
                            <h2 className='text-xl font-semibold text-gray-800'>The Palm Mall</h2>
                            <h3 className='text-base font-semibold text-gray-600 leading-5'>TP Nagar, Korba block, Korba, Chhattisgarh</h3>
                        </div>
                    </div>

                    <div className="rounded-xl from flex items-center py-6 px-8 bg-gray-50 gap-12">
                        <h1 className='h-16 w-16  rounded-full text-3xl flex items-center justify-center'><img className='scale-[2.5]' src="https://calltoinspiration.com/api/media?id=6444f3c77b0eb330e9db8700&asAttachment=false" alt="" /></h1>
                        <div className="info flex flex-col items-start w-4/5">
                            <h2 className='text-2xl font-mono font-semibold text-gray-800'>₹280.00</h2>
                            <h3 className='text-lg font-semibold text-gray-600 leading-5 flex items-center gap-4'>After Ride <div className="dot h-2 w-2 bg-black rounded-full"></div> Cash or UPI</h3>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center gap-4'>
                        <button onClick={() => props.setConfirmRidePopUp(true)} className='bg-green-400 text-white w-1/2 py-2 text-2xl rounded-2xl font-semibold '>Accept Ride</button>
                        <button onClick={() => props.setRidePopup(false)} className='bg-gray-900 text-white w-1/2 py-2 text-2xl rounded-2xl font-semibold '>Ignore</button>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default RidePopup