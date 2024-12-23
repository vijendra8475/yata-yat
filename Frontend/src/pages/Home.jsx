import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
        <div className="container h-screen w-[100dvw] bg-red-400 flex  justify-between flex-col pt-8 bg-cover bg-center bg-[url(https://files.oaiusercontent.com/file-NcCuRhZ3DoVdAHTpKfTT9m?se=2024-12-23T13%3A57%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0d0cf3d6-b885-4b52-87da-a91e037a3440.webp&sig=IIvJYMlt6M0FgwGL/hPrvYCOZgAagSEz4vAgr0F5tVw%3D)]">
            <img className='w-24 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white w-full p-4 pb-8'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center bg-black text-white mt-5 py-3 rounded px-10 w-full'>Continue</Link>
            </div>
        </div>
  )
}

export default Home
