import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom' // Added useLocation
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/socketContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Riding = () => {
    

    const location = useLocation();
    const { ride } = location.state || {}
    const { socket } = useContext(SocketContext)

    const navigate = useNavigate();
    socket.on('ride-ended',() => {
        navigate('/home')
    })


    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

     const getDistance = async () => {
        if(ride) {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-distance-time`,{
                headers : {
                    Authorization : `bearer ${localStorage.getItem('token')}`
                },
                params : {
                    origin : ride?.pickup,
                    destination : ride?.destination
                }
            });

            setDistance(res.data.distance.text)
            setDuration(res.data.duration.text)
        }
     }
     getDistance();
  return (
    <div className='h-screen overflow-hidden flex justify-between flex-col p-8 w-full bg-[url(https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg)]'>
        <div className='w-full h-10'><img className='w-24 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" /></div>
        <div className="dashboard h-[calc(100%-2.75rem)] overflow-hidden relative p-10 w-full bg-opacity-30 rounded-3xl bg-black flex items-center justify-center  gap-20 ">


            <div className="box w-1/2 bg-gray-300 rounded-2xl h-full p-2 overflow-auto gap-1 flex flex-col">

                <div className="header top bg-white flex flex-col py-2 items-center rounded-t-xl gap-3">
                    <div className="line h-2 w-20 bg-gray-400 rounded-full"></div>
                    <h1 className='text-xl font-semibold'>Ongoing Ride</h1>
                </div>

                <div className="body w-full h-full bg-white gap-1 flex-col flex rounded-b-xl overflow-hidden ">
                    <img className=' w-full' src="https://usagif.com/wp-content/uploads/gifs/car-driving-69.gif" alt="" />
                    <div className='w-full py-6 px-8 bg-yellow-400  flex items-center justify-between'>
                        <div className='flex flex-col items-start gap-2'>
                            <div className="box py-2 px-4 text-white rounded-3xl bg-black flex items-center gap-2 font-semibold">
                                <i className="ri-map-pin-2-line text-2xl font-normal"></i>
                                { ride?.destination }
                            </div>
                            <div className='px-4'>
                                <h2 className='text-lg font-semibold'>{distance} away</h2>
                                <h2 className='text-sm font-medium'>Approx {duration} to reach destination</h2>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            </div>


    </div>
  )
}

export default Riding