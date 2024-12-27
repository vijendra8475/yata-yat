import React from 'react'

const WaitForDriver = () => {
  return (
    
    <div className='flex h-full w-full items-center justify-between overflow-auto'>
    <div className='flex flex-col p-5 bg-gray-100 rounded-t-3xl w-full h-full g-4'>
        <div className="h-1/5 border-b-2 w-full bg-white rounded-t-xl flex flex-col items-center py-4 gap-5 justify-center">
                    <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                    <h2 className='text-black font-semibold text-4xl '>Ride Confirmed</h2>
        </div>


        <div className="flex overflow-hidden gap-2">
            <div className="left flex flex-col bg-white w-1/2 overflow-hidden p-4 justify-center">
                <h1 className='text-5xl text-center text-gray-800 font-semibold font-mono'>Riding Captain</h1>
                <div className="imgs  flex items-center justify-center h-3/5">
                    <img className='z-10 relative left-14 h-3/5 object-cover object-center' src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" alt="" />
                    <img className=' relative right-14 h w-2/5 h-full object-cover object-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1591275848/assets/57/348090-0115-46b7-96b3-b9085e736876/original/Comfort_Vehicle_list.png" alt="" />
                </div>
                <div className=" rounded-xl flex flex-col items-center pt-2 px-8 text-center gap-4">
                    <h1 className='font-bold text-5xl text-center w-full flex items-center justify-center gap-4'>SANTH <div className="dot h-2 w-2 rounded-full bg-black"></div> <div className='flex items-center gap-4'><i className="ri-star-fill text-4xl"></i> 4.8</div> </h1>
                    <h1 className='font-semibold text-3xl text-center w-full flex items-center justify-center gap-4'> SANTH is your riding captain </h1>
                </div>
            </div>

            <div className="right bg-white w-1/2 h-full p-10 flex flex-col items-center justify-around overflow-auto gap-10">
                {/* <h1 className='text-5xl py-4 px-8 text-center text-gray-800 font-semibold font-mono'>Vehicle Details</h1> */}
                <div className="top py-4 px-8  w-full">
                    <h1 className='font-mono text-5xl font-semibold text-center'>KA15 AK00-0</h1>
                    <h3 className='font-semibold text-3xl text-slate-800 text-center'>White Suzuki S-Presso LXI</h3>
                </div>

                <form action="" className='w-full py-2 px-4 flex items-center gap-4 border rounded-3xl bg-gray-100'>
                    <i className="ri-message-3-fill text-3xl text-gray-700 w-14"></i>
                    <input type="text" placeholder='Send a Message...' className='w-full bg-transparent  px-4 rounded-xl text-2xl font-semibold focus:outline-none  placeholder:text-2xl' />
                    <i className="ri-send-plane-2-fill text-3xl text-gray-700"></i>
                </form>

                <div className="options flex items-center justify-evenly w-full">
                    <div className="icon-box flex flex-col items-center gap-2">
                        <div className="circle h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center text-blue-600 hover:text-black">
                            <i className="ri-shield-star-fill text-5xl "></i>
                        </div>
                        <h2 className='text-2xl font-semibold'>Safety</h2>
                    </div>
                    <div className="icon-box flex flex-col items-center gap-2">
                        <div className="circle h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center text-blue-600 hover:text-black">
                            <i className="ri-map-pin-2-line text-5xl"></i>
                        </div>
                        <h2 className='text-2xl font-semibold'>Share my trip</h2>
                    </div>
                    <div className="icon-box flex flex-col items-center gap-2">
                        <div className="circle h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center text-blue-600 hover:text-black">
                            <i className="ri-phone-fill text-5xl "></i>
                        </div>
                        <h2 className='text-2xl font-semibold'>Safety</h2>
                    </div>
                </div>

                <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-100 gap-12">
                    <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-map-pin-2-fill"></i></h1>
                    <div className="info flex flex-col items-start w-4/5">
                        <h2 className='text-3xl font-bold text-gray-800'>NTPC Korba</h2>
                        <h3 className='text-lg font-semibold text-gray-600 leading-6'>Housing Board colony Jamnipali NTPC, Darri block, Korba, Chhattisgarh</h3>
                    </div>
                </div>

                <button className='bg-[black] text-white w-full py-3 text-3xl rounded-2xl font-bold hover:bg-[red]'>Cancel Ride</button>

            </div>
        </div>
       
    



    </div>


    </div>
  )
}

export default WaitForDriver