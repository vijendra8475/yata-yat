import React, { useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import WaitForDriver from '../components/WaitForDriver'
import LookingForDriver from '../components/LookingForDriver'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { SocketContext } from '../context/socketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/userContext';
// import LiveTracking from '../components/LiveTracking';


const Home = () => {

  const navigate = useNavigate();

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [ activeField, setActiveField ] = useState(null)
  const [random, setRandom] = useState(0)
  const [vehicleType, setVehicleType] = useState('')


  const [fare, setFare] = useState({})


  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const arrowRef = useRef(null)
  const addressRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const logoutRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)

  const rideAcceptedRef = useRef(null)
  const [rideAccepted, setRideAccepted] = useState(false)

  const [waitForDriver, setWaitForDriver] = useState(false)
  const waitForDriverRef = useRef(null)

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

  useEffect(() => {
    // console.log(user);
    socket.emit('join', { userType : "user", userId : user?._id })
  }, [user])
  

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

      gsap.to(logoutRef.current,{
        top : '20px'
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

      gsap.to(logoutRef.current,{
        top : '2.25rem'
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

  useEffect(() => {
    if(vehiclePanel) {
      fareCalculator();
    }
  }, [vehiclePanel, random])
  

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

  const logoutHandler = async () => {
    await localStorage.removeItem('token');
    navigate('/login');
  }


  const handlePickupChange = async(e) => {
    setPickup(e.target.value);
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params : {input: e.target.value },
        headers : {
          Authorization : `bearer ${localStorage.getItem('token')}`
        }
      })
      setPickupSuggestions(response.data);
      // console.log(pickupSuggestions);
      
    }
    catch(err) {
      // console.log(err);
    }
  }

  const handleDestinationChange = async(e) => {
    setDestination(e.target.value);
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params : {input: e.target.value },
        headers : {
          Authorization : `bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  const fareCalculator = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
      params : {
        pickup,
        destination
      },
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })

    setFare(response.data)
    
  }

const createRide =  async() => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`,{
    pickup,
    destination,
    vehicleType
  },{
    headers : {
      Authorization : `Bearer ${localStorage.getItem('token')}`
    }
  })
  console.log(response.data);
}

socket.on('ride-confirmed', ride => {
  // setVehicleFound(false)
  setWaitForDriver(true)
  // setRide(ride)
})




  return (
    <div className='h-screen w-screen relative overflow-x-hidden'>
      <button onClick={() => logoutHandler()} ref={logoutRef} className='z-30 bg-black text-xl py-2 px-5 font-semibold rounded-xl text-white absolute top-9 right-10'>Log out</button>
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
            <input onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
            }} value={pickup} onChange={e => handlePickupChange(e)} className='bg-[#eee] border tex-lg px-12 py-2 rounded-lg w-full mt-5' type="text" placeholder='Add a pich-up Location' />
            <input onClick={() => {
              setPanelOpen(true)
              setActiveField('destination')
            }} value={destination} onChange={e => handleDestinationChange(e)} className='bg-[#eee] border text-lg px-12 py-2 rounded-lg w-full mt-3' type="text" placeholder='Enter you desination' />
          </form>
          <h5 onClick={() => {backHandler()}} className='z-10 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center absolute top-[180px] left-16 my-2 text-3xl font-bold'><i className="ri-arrow-left-line"></i></h5>
        </div>


        <div ref={panelRef} className=' h-0 bg-white overflow-auto'>
          <div className='flex h-full items-start justify-between gap-8 relative '>

            <div ref={addressRef} className='w-full h-full overflow-y-auto' >

                <LocationSearchPanel 
                  suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions} 
                  setPickup={setPickup}
                  setDestination={setDestination}
                  // fare={fare}
                  // setfare={setFare}
                  activeField={activeField}
                  vehiclePanel={vehiclePanel}  
                  setVehiclePanel={setVehiclePanel} 
                  vehiclePanelRef={vehiclePanelRef}
                  setRandom={setRandom}
                />

            </div>

            <div ref={vehiclePanelRef} className=' w-0 h-full flex flex-col items-center justify-between gap-4 py-6 overflow-y-auto'>
              <VehiclePanel 
                fare={fare}
                setConfirmRidePanel={setConfirmRidePanel}
                setVehicleType={setVehicleType}
                vehicleType={vehicleType}
              />
            </div>

            <div ref={confirmRidePanelRef} className=' w-full  absolute top-0 left-0  bg-white h-full flex flex-col items-center justify-between gap-4 py-6'>
              <ConfirmRide 
                pickup={pickup}
                fare={fare}
                destination={destination}
                vehicleType={vehicleType}
                createRide={createRide}
                setVehicleFound={setVehicleFound}
              />
            </div>

            <div ref={vehicleFoundRef} className=' w-full h-0  absolute top-0 left-0  bg-white flex flex-col items-center justify-center gap-4 py-6'>
              <div className="flex flex-col items-center justify-center h-full w-1/3">
              <LookingForDriver
                setRideAccepted={setRideAccepted} 
                vehicleType={vehicleType}
                createRide={createRide}
                pickup={pickup}
                fare={fare}
                destination={destination}
              />
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