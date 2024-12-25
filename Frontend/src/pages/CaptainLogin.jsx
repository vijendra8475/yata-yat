import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('');

      const navigate = useNavigate();
    
      const submitHandler = async (event) => {
    
        event.preventDefault();
            const captainData = {
              email : email,
              password : password
            }
            setEmail('');
            setPassword('');
            // console.log(userData);

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData );

            if(response.status === 201){
              const data = response.data;
              localStorage.setItem('token',data.token)
              navigate('/captain-home');
            }
      }
  return (
    <div className='p-8 h-screen w-[100dvw] flex flex-col justify-between'>

      
      <div>
      <img className='w-24 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <h1 className='mb-2 w-full text-center text-4xl font-bold font-mono'>Login as Captain</h1>
      <form action="" onSubmit={(event) => { submitHandler(event) } }>
        <h3 className='text-xl mb-2'>What's your E-mail</h3>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded w-full py-2 px-4 border text-lg placeholder:text-base'
          name="email" 
          required 
          id="" 
          placeholder='test@example.com'
        />

        <h3 className='text-xl mb-2'>What's your password</h3>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] w-full mb-7 rounded py-2 px-4 border text-lg placeholder:text-base'
          name="password" 
          required 
          id="" 
          placeholder='password'
        />

        <button 
        className='w-full py-2 text-center bg-black text-white rounded font-semibold text-xl mb-7'
        > 
          Login
        </button>

        <p className='w-full text-center'>Join a fleet ? <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link></p>
      </form>
      </div>

      <div>
        <Link
        to="/login"
        className='flex items-center justify-center w-full py-2 px-4 text-center bg-[#10b461] text-white font-semibold text-xl mb-4'
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
