import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const FinishRide = ( props ) => {

    const navigate = useNavigate();

    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const getDistance = async () => {
        if(props.rideData) {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-distance-time`,{
                headers : {
                    Authorization : `bearer ${localStorage.getItem('token')}`
                },
                params : {
                    origin : props?.rideData.pickup,
                    destination : props?.rideData.destination
                }
            });

            setDistance(res.data.distance.text)
            setDuration(res.data.duration.text)
        }
     }
     getDistance();

     async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.rideData._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }

  return (
    <div className="w-1/2 overflow-y-auto h-full">
        <div className='flex flex-col px-5 py-3 bg-gray-100 rounded-3xl w-full h-full g-4 overflow-auto '>
            <div className=" border-b-2 w-full bg-white rounded-t-xl flex flex-col items-center py-4 gap-5 justify-center">
                <div className="line w-32 h-2 bg-gray-400 rounded-full"></div>
                <h2 className='text-black font-semibold text-2xl '>Finish this Ride!</h2>
            </div>

            <div className='bg-white pt-4 h-2/5 w-full flex-flex-col items-center'>
                <div className='bg-white h-4/5 w-full flex items-center justify-evenly'>
                        <img className='object-center h-48 object-cover ' src="https://cdn-icons-png.freepik.com/512/219/219988.png" alt="" />
                </div>
                <h2 className='text-center text-xl font-semibold'>{props?.rideData?.user.fullname.firstname}</h2>
                <h2 className='text-center text-base'>Approx {distance} covers in {duration}</h2>
            </div>



                <div className="ride-info w-full bg-white rounded-b-xl px-4 py-5 flex flex-col gap-4 relative items-center">

                    <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12 w-full">
                        <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-map-pin-2-fill"></i></h1>
                        <div className="info flex flex-col items-start w-4/5">
                            <h2 className='text-xl font-semibold text-gray-800'>{props.rideData?.pickup}</h2>
                            {/* <h3 className='text-base font-semibold text-gray-600 leading-5'>Housing Board colony Jamnipali NTPC, Darri block, Korba, Chhattisgarh</h3> */}
                        </div>
                    </div>


                    <div className="rounded-xl from flex items-center py-4 px-8 bg-gray-50 gap-12 w-full">
                        <h1 className='h-16 w-16 bg-gray-300 rounded-full text-3xl flex items-center justify-center'><i className="ri-map-pin-2-line"></i></h1>
                        <div className="info flex flex-col items-start w-4/5">
                            <h2 className='text-xl font-semibold text-gray-800'>{props.rideData?.destination}</h2>
                            {/* <h3 className='text-base font-semibold text-gray-600 leading-5'>TP Nagar, Korba block, Korba, Chhattisgarh</h3> */}
                        </div>
                    </div>

                    <div className="rounded-xl from flex items-center py-6 px-8 bg-gray-50 gap-12 w-full">
                        <h1 className='h-16 w-16  rounded-full text-3xl flex items-center justify-center'><img className='scale-[2.5]' src="https://calltoinspiration.com/api/media?id=6444f3c77b0eb330e9db8700&asAttachment=false" alt="" /></h1>
                        <div className="info flex flex-col items-start w-4/5">
                            <h2 className='text-2xl font-mono font-semibold text-gray-800'>₹{props.rideData?.fare}</h2>
                            <h3 className='text-lg font-semibold text-gray-600 leading-5 flex items-center gap-4'>After Ride <div className="dot h-2 w-2 bg-black rounded-full"></div> Cash or UPI</h3>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center gap-4'>
                        <button onClick={() => {
                           endRide()
                        }} className='bg-green-400 text-white w-full py-2 text-2xl rounded-2xl font-semibold flex items-center justify-center'>Complete Ride</button>
                    </div>

                </div>

        </div>
    </div>
  )
}

export default FinishRide