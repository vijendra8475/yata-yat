import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
        <div className="container h-screen w-screen flex  justify-between flex-col pt-8 bg-cover bg-center bg-[url(https://i.pinimg.com/736x/34/e4/ef/34e4efdabb430faea65f904017c07c5d.jpg)]">
            <img className='w-24 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white w-full p-4 pb-8'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center bg-black text-white mt-5 py-3 rounded px-10 w-full'>Continue</Link>
            </div>
        </div>
  )
}

export default Start
