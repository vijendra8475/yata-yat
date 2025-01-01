import React, { useContext, useEffect, useRef, useState } from 'react'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import { CaptainDataContext } from '../context/captainContext'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useNavigate } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import { SocketContext } from '../context/socketContext'

const CaptainHome = () => {

  const navigate = useNavigate();

  const ridePopUpRef = useRef(null);
  const [ridePopup, setRidePopup] = useState(true);

  const confirmRidePopupRef = useRef(null)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)

  const { socket } = useContext(SocketContext);
  const { captain } = useContext( CaptainDataContext )
  // console.log(captain);

  useEffect(() => {
    socket.emit('join', {
      userId : captain._id,
      userType : 'captain'
    })

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

          console.log(
            captain._id,
            {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          );
          

          socket.emit('update-location-captain', {
            userId: captain._id,
            location : {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation()
    // return () => clearInterval(locationInterval);
    
  }, [])
  
  


  useGSAP(() => {
    if(ridePopup){
      gsap.to(ridePopUpRef.current,{
        height : '100%',
        padding : '2.5rem'
      })
    }
    else{
      gsap.to(ridePopUpRef.current,{
        height : '0%',
        padding : '0'
      })
    }
  },[ridePopup])

  useGSAP(() => {
    if(confirmRidePopUp){
      gsap.to(confirmRidePopupRef.current,{
        height : '100%',
        padding : '2.5rem'
      })
    }
    else{
      gsap.to(confirmRidePopupRef.current,{
        height : '0%',
        padding : '0'
      })
    }
  },[confirmRidePopUp])



  const logoutHandler = async () => {
    await localStorage.removeItem('token');
    navigate('/captain-login');
  }




  return (
    <div className='h-screen overflow-hidden flex justify-between flex-col p-8 w-full bg-[url(https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg)]'>
      <button onClick={() => logoutHandler()} className='z-30 bg-black text-xl py-2 px-5 font-semibold rounded-xl text-white absolute top-9 right-10'>Log out</button>
      <div className='w-full h-10'><img className='w-24 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" /></div>
      <div className="dashboard h-[calc(100%-2.75rem)] overflow-hidden relative p-10 w-full bg-opacity-30 rounded-3xl bg-black flex items-center justify-between gap-20 ">

        <div className="left w-1/3 h-full bg-slate-300 rounded-t-3xl rounded-3xl p-5 flex flex-col justify-between items-center">
          <div className="header w-full flex flex-col items-center bg-white rounded-t-3xl justify-around py-3 h-20">
            <div className="line h-2 w-1/5 bg-slate-500 rounded-full"></div>
            <h2 className='text-gary-600 font-semibold text-2xl'>Driver Info.</h2>
          </div>

          < CaptainDetails />
        </div>

        <div className="middle rounded-t-3xl w-1/3 h-full bg-slate-300 rounded-3xl p-5 flex flex-col justify-between items-center">
          <div className="header w-full flex flex-col items-center bg-white rounded-t-3xl justify-around py-3 h-20">
            <div className="line h-2 w-1/5 bg-slate-500 rounded-full"></div>
            <h2 className='text-gary-600 font-semibold text-2xl'>Vehicle Info.</h2>
          </div>

          <div className="body bg-white h-[calc(100%-5.25rem)] py-4 px-6 w-full rounded-b-xl flex flex-col items-center justify-evenly">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1591275848/assets/57/348090-0115-46b7-96b3-b9085e736876/original/Comfort_Vehicle_list.png" className='w-full scale-[1.8]' alt="" />

            <div className="info w-full flex flex-col items-center mt-10">
              <div className='w-full  flex items-center justify-between'>
                
              <div  className='flex flex-col'>
                  <h1 className='text-2xl font-semibold text-left flex items-center gap-2'> <i className="ri-user-fill text-lg"></i> 2</h1>
                  <h2 className='text-lg font-semibold text-gray-400 text-left'>Red Colored</h2>
                </div>
                
                <div  className='flex flex-col'>
                  <h1 className='text-2xl font-semibold text-right'>MH29 AK0000</h1>
                  <h2 className='text-lg font-semibold text-gray-400 text-right'>White Suzuki S-Presso LXI</h2>
                </div>
              </div>
            </div>

            <div className="box flex items-center justify-around rounded-xl bg-slate-200 w-full h-40 px-4">
              <div className="small-box flex items-center flex-col">
              <i className="ri-gas-station-fill text-5xl"></i>
                 <h2 className='text-2xl font-semibold mt-2'>12Km/Li</h2>
                <h3 className='text-gray-600 font-semibold text-base'>runing cost</h3>
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
        </div>

        <div className="right rounded-t-3xl w-1/3 h-full bg-slate-300 rounded-3xl p-5 flex flex-col justify-between items-center">
          <div className="header flex flex-col items-center w-full bg-white rounded-t-3xl justify-around py-3 h-20">
            <div className="line h-2 w-1/5 bg-slate-500 rounded-full"></div>
            <h2 className='text-gary-600 font-semibold text-2xl'>History</h2>
          </div>

          <div className="body bg-white h-[calc(100%-5.25rem)] w-full flex flex-col rounded-b-xl py-4 px-4 gap-4 overflow-y-auto">


            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>
            <div className="box w-full h-20 rounded-xl py-2 px-6 bg-gray-100 flex items-center justify-between">

              <div className='h-full flex flex-col  justify-between' >
                <h2 className='font-semibold text-2xl'>Delhi</h2>
                <h3 className='font-semibold text-base leading-5 text-gray-700'>Raagini Sector-4 </h3>
              </div>


              <div className='h-full flex flex-col  justify-between text-right'>
                <div className='font-semibold text-2xl'>₹280.2 <small className='text-base'>Earned</small></div>
                <h3 className='font-semibold text-base text-gray-700 leading-5'>7.8Kms covers in 18min </h3>
              </div>
            </div>

            
          </div>
        </div>


        <div ref={ridePopUpRef} className='absolute top-0 left-0 flex p-0  bg-black bg-opacity-30 flex-col h-0 w-full items-center justify-between overflow-auto gap-10'>
          <RidePopup setRidePopup={setRidePopup} setConfirmRidePopUp={setConfirmRidePopUp}/>
        </div>


        <div ref={confirmRidePopupRef} className='absolute top-0 left-0 flex p-0 flex-col h-0 w-full items-center justify-between overflow-auto gap-10'>
          <ConfirmRidePopUp confirmRidePopupRef={confirmRidePopupRef} setRidePopup={setRidePopup} setConfirmRidePopup={setConfirmRidePopUp} />
        </div>

      </div>


    </div>
  )
}

export default CaptainHome