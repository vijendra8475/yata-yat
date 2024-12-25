import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'


const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const arrowRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height : '77%',
        padding : '0 24px 24px',
        duration : 0.5,
        display : 'block',
      })
      gsap.to(arrowRef.current,{
        display : 'block',
        duration : 0.5
      })
    }
    else{
      gsap.to(panelRef.current,{
        height : '0%',
        display : 'none',
        padding : 0
      })
      gsap.to(arrowRef.current,{
        display : 'none',
        duration : 0.5
      })
    }
  },[panelOpen])


  return (
    <div className='h-screen w-screen relative overflow-x-hidden'>
      <img className='w-24 mb-10 absolute top-8 left-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='w-full h-full' >
        <img
          className='w-screen h-full object-cover object-center'
          src='https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png'
          alt="" 
        />
      </div>
      <div className=' flex flex-col justify-end h-screen w-full absolute top-0 left-0 rounded-lg'>
        <div className='h-[23%] p-6 bg-white relative'>
          <h5  className='absolute left-[50%] text-4xl'><i onClick={() => {setPanelOpen(false); console.log('hello')}} ref={arrowRef} className="ri-arrow-down-wide-line hidden"></i></h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form action="" onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line h-[60px] left-[2.5%] top-[98px] w-1 bg-gray-900 absolute rounded-full"></div>
            <input onClick={() => setPanelOpen(true)} value={pickup} onChange={e => setPickup(e.target.value)} className='bg-[#eee] border tex-lg px-12 py-2 rounded-lg w-full mt-5' type="text" placeholder='Add a pich-up Location' />
            <input onClick={() => setPanelOpen(true)} value={destination} onChange={e => setDestination(e.target.value)} className='bg-[#eee] border text-lg px-12 py-2 rounded-lg w-full mt-3' type="text" placeholder='Enter you desination' />
          </form>
        </div>
        <div ref={panelRef} className=' h-0 bg-white overflow-auto'>
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home