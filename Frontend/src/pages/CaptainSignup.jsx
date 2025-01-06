import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/captainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');



    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');


    const { captain, setCaptain } = React.useContext(CaptainDataContext);



    const submitHandler = async (event) => {
        event.preventDefault();
        const captainData = {
            fullname : {
                firstname : firstname,
                lastname : lastname
            },
            email : email,
            password : password,
            vehicle : {
              color : vehicleColor,
              plate : vehiclePlate,
              capacity : vehicleCapacity,
              vehicleType :  vehicleType
            }
        };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData );


        if(response.status === 201){
          const data = response.data;
          setCaptain(data.captain)
          localStorage.setItem('token',data.token)
          navigate('/captain-home');
          alert("Registration Successfull");
        }

  
        setEmail('');
        setFirstname('');
        setPassword('');
        setLastname('');
        setVehicleColor('');
        setVehicleCapacity('');
        setVehiclePlate('');
        setVehicleType('');
    }


  return (
    <div className='p-8 h-screen w-[100dvw] flex flex-col justify-between'>

      
      <div>
      <img className='w-24 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <h1 className='mb-2 w-full text-center text-4xl font-bold font-mono'>Register as Captain</h1>
      <form action="" onSubmit={(event) => { submitHandler(event) } }>
        <h3 className='text-xl mb-2 font-semibold'>What's your Name</h3>
        <div className="flex gap-4 mb-5">
            <input 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            className='bg-[#eeeeee] rounded py-2 px-4 border text-lg placeholder:text-base w-1/2'
            name="firstname" 
            required 
            id="" 
            placeholder='First name'
            />
            <input 
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className='bg-[#eeeeee] rounded py-2 px-4 border text-lg placeholder:text-base w-1/2'
            name="lastname"
            id="" 
            placeholder='Last name'
            />
        </div>

        <h3 className='text-xl mb-2 font-semibold'>What's your E-mail</h3>
        <input 
          type="email" 
          value={email}
            onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] w-full mb-5 rounded py-2 px-4 border text-lg placeholder:text-base'
          name="email" 
          required 
          id="" 
          placeholder='Enter your Email'
        />


        <h3 className='text-xl mb-2 font-semibold'>What's your password</h3>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] w-full mb-5 rounded py-2 px-4 border text-lg placeholder:text-base'
          name="password" 
          required 
          id="" 
          placeholder='Enter Password'
        />

<h3 className='text-xl mb-2 font-semibold'>Vehicle's Details</h3>
        <div className="flex gap-4 mb-5">
            <input 
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            type="text"
            className='bg-[#eeeeee] rounded py-2 px-4 border text-lg placeholder:text-base w-1/2'
            name="vehicleColor" 
            required 
            id="" 
            placeholder='Vehicle Color'
            />
            <input 
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            type="text"
            className='bg-[#eeeeee] rounded py-2 px-4 border text-lg placeholder:text-base w-1/2'
            name="vehiclePlate" 
            required 
            id="" 
            placeholder='Vehicle Plate'
            />
            </div>
        <div className="flex gap-4 mb-7">
            <input 
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            className='bg-[#eeeeee] rounded py-2 px-4 border text-lg placeholder:text-base w-1/2'
            name="vehicelCapacity" 
            required 
            id="" 
            placeholder='Vehicle Capacity'
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] rounded py-2 px-4 border text-lg placeholder:text-base w-1/2'
              name="vehicleType"
              required
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="auto">Auto-Riksha</option>
            </select>
        </div>

        <button 
        className='w-full py-2 text-center bg-black text-white rounded font-semibold text-xl mb-2'
        > 
          Create Captain Account
        </button>

        <p className='w-full text-center'>Already have an account ? <Link to="/captain-login" className='text-blue-600'>Login as a Captain</Link></p>
      </form>
      </div>

      <div>
        <p className='text-center '>Uber can make mistakes. <u>Check important info.</u></p>
      </div>
    </div>
  )
}

export default CaptainSignup
