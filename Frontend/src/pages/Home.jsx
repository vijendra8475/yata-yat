import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import WaitForDriver from '../components/WaitForDriver'
import LookingForDriver from '../components/LookingForDriver'


const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const arrowRef = useRef(null)
  const addressRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)

  const rideAcceptedRef = useRef(null)
  const [rideAccepted, setRideAccepted] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height : '77%',
        padding : '0 24px 18px',
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

      setVehiclePanel(false);
    }
  },[panelOpen])

  useGSAP(() => {
    
      if(vehiclePanel){
        gsap.to(vehiclePanelRef.current,{
          width : '50%',
          display : 'flex'
        })
        gsap.to(addressRef.current,{
          width : '50%'
        })
      }
      else{
        gsap.to(vehiclePanelRef.current,{
          width : '0%',
          display : 'none'
        })
        gsap.to(addressRef.current,{
          width : '100%'
        })
      }
  },[vehiclePanel])

  useGSAP(() => {
    
      if(confirmRidePanel){
        gsap.to(confirmRidePanelRef.current,{
          width : '100%',
          display : 'flex'
        })
      }
      else{
        gsap.to(confirmRidePanelRef.current,{
          width : '0%',
          display : 'none'
        })
      }
  },[confirmRidePanel])

  useGSAP(() => {
    
      if(vehicleFound){
        gsap.to(vehicleFoundRef.current,{
          height : '100%',
          display : 'flex'
        })
        console.log('hello');
        
      }
      else{
        gsap.to(vehicleFoundRef.current,{
          height : '0%',
          display : 'none'
        })
      }
  },[vehicleFound])

  useGSAP(() => {
    
      if(rideAccepted){
        gsap.to(rideAcceptedRef.current,{
          height : '100%',
          display : 'flex'
        })
        console.log('hello');
        
      }
      else{
        gsap.to(rideAcceptedRef.current,{
          height : '0%',
          display : 'none'
        })
      }
  },[rideAccepted])


  const backHandler = () => {
    if(rideAccepted){
      setRideAccepted(false);
      console.log('h');
      return;
    }
    else if(vehicleFound){
      setVehicleFound(false);
      console.log("vehicleFound");
      return;
    }
    else if(confirmRidePanel){
      setConfirmRidePanel(false);
      console.log("confirmRidePanel");
      return;
    }
    else if(vehiclePanel){
      setVehiclePanel(false);
      console.log('vehiclePanel');
      
      return;
    }
  }


  return (
    <div className='h-screen w-screen relative overflow-x-hidden'>
      <img className='w-24 mb-10 absolute top-8 left-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='w-full h-full' >
        <img
          className='w-screen h-full object-cover object-center'
          src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
          alt="" 
        />
      </div>
      <div className=' flex flex-col justify-end h-screen w-full absolute top-0 left-0 rounded-lg'>
        <div className='h-[23%] p-6 bg-white relative'>
          <h5  className='absolute left-[50%] text-4xl'><i onClick={() => {
            setPanelOpen(false);
            setVehicleFound(false);
            setConfirmRidePanel(false);
            setVehiclePanel(false);
          }} ref={arrowRef} className="ri-arrow-down-wide-line hidden"></i></h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          
          <form action="" onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line h-[60px] left-[2.5%] top-[98px] w-1 bg-gray-900 absolute rounded-full"></div>
            <input onClick={() => setPanelOpen(true)} value={pickup} onChange={e => setPickup(e.target.value)} className='bg-[#eee] border tex-lg px-12 py-2 rounded-lg w-full mt-5' type="text" placeholder='Add a pich-up Location' />
            <input onClick={() => setPanelOpen(true)} value={destination} onChange={e => setDestination(e.target.value)} className='bg-[#eee] border text-lg px-12 py-2 rounded-lg w-full mt-3' type="text" placeholder='Enter you desination' />
          </form>
          <h5 onClick={() => {backHandler()}} className='z-10 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center absolute top-[180px] left-16 my-2 text-3xl font-bold'><i className="ri-arrow-left-line"></i></h5>
        </div>
        <div ref={panelRef} className=' h-0 bg-white overflow-auto'>
          <div className='flex h-full items-start justify-between gap-8 relative '>
            <div ref={addressRef} className='w-full h-full overflow-y-auto' >
              <LocationSearchPanel vehiclePanel={vehiclePanel}  setVehiclePanel={setVehiclePanel} vehiclePanelRef={vehiclePanelRef}/>
            </div>

            <div ref={vehiclePanelRef} className=' w-0 h-full flex flex-col items-center justify-between gap-4 py-6 overflow-y-auto'>
              <VehiclePanel  setConfirmRidePanel={setConfirmRidePanel}/>
            </div>

            <div ref={confirmRidePanelRef} className=' w-full  absolute top-0 left-0  bg-white h-full flex flex-col items-center justify-between gap-4 py-6'>
              <ConfirmRide  setVehicleFound={setVehicleFound}/>
            </div>

            <div ref={vehicleFoundRef} className=' w-full h-0  absolute top-0 left-0  bg-white flex flex-col items-center justify-center gap-4 py-6'>
              <div className="flex flex-col items-center justify-center h-full w-2/3">
              <LookingForDriver setRideAccepted={setRideAccepted} />
              </div>
            </div>

            <div ref={rideAcceptedRef} className=' w-full h-0  absolute top-0 left-0  bg-white flex flex-col items-center justify-center gap-4 py-6'>
              <div className="flex flex-col items-center justify-center h-full w-2/3">
              <WaitForDriver />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  ) 
}

export default Home