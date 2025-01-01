import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/captainContext'

const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)
  return (
    <div className="body bg-white h-[calc(100%-5.25rem)] py-4 px-6 w-full rounded-b-xl flex flex-col items-center justify-evenly">
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" className='w-2/3' alt="" />

            <div className="info w-full flex flex-col items-center mt-10">
              <div className='w-full  flex items-center justify-between'>

                <div  className='flex flex-col'>
                  <h1 className='text-3xl font-semibold font-mono'>{captain?.fullname.firstname || 'n/a' }</h1>
                  <div className='semibold text-yellow-400 flex items-center'><i className="ri-star-s-fill text-4xl"></i> <h2 className='text-xl text-black font-semibold'>- 4.8</h2></div>
                </div>
                <div  className='flex flex-col'>
                  <h1 className='text-2xl font-bold'>$290</h1>
                  <h2 className='text-lg font-semibold text-gray-400'>Earned</h2>
                </div>
              </div>
            </div>

            <div className="box flex items-center justify-around rounded-xl bg-slate-200 w-full mt-10 h-40 px-4">
              <div className="small-box flex items-center flex-col">
                <i className="ri-speed-up-line  text-5xl"></i>
                 <h2 className='text-2xl font-semibold mt-2'>25</h2>
                <h3 className='text-gray-600 font-semibold text-base'>Kms runs</h3>
              </div>

              <div className="small-box flex items-center flex-col">
              <i className="ri-timer-2-line text-5xl"></i>
                 <h2 className='text-2xl font-semibold mt-2'>2.3</h2>
                <h3 className='text-gray-600 font-semibold text-base'>Hours drive</h3>
              </div>

              <div className="small-box flex items-center flex-col">
              <i className="ri-money-rupee-circle-line text-5xl"></i>
                <h2 className='text-2xl font-semibold mt-2'>1282.20</h2>
                <h3 className='text-gray-600 font-semibold text-base'>Earned</h3>
              </div>
            </div>
          </div>
  )
}

export default CaptainDetails