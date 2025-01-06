import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UberLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  // const [userData, setuserData] = useState({})

  const { user, setUser } = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const temptoken = localStorage.getItem('token');
  useEffect(() => {
    if(temptoken){
      navigate('/home');
    }
  }, [temptoken])
  
  

  const submitHandler = async (event) => {

    event.preventDefault();
    


        const userData = {
          email: email,
          password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if(response.status === 201){
          const data = response.data;
          setUser(data.user);
          localStorage.setItem('token',data.token);
          navigate('/home');
        }
        

        
        setEmail('');
        setPassword('');
        console.log(userData);
  }

  return (
    <div className='p-8 h-screen w-[100dvw] flex flex-col justify-between'>
      
      <div>
      <img className='w-24 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <h1 className='mb-2 w-full text-center text-4xl font-bold font-mono'>Login as User</h1>

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

        <p className='w-full text-center'>New here? <Link to="/signup" className='text-blue-600'>Create a new account</Link></p>
      </form>
      </div>

      <div>
        <Link
        to="/captain-login"
        className='flex items-center justify-center w-full py-2 px-4 text-center bg-[#10b461] text-white font-semibold text-xl mb-4'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UberLogin
