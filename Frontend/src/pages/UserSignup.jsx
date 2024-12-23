import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/userContext';

const UberSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserContext)

  const submitHandler = async (event) => {
      event.preventDefault();
      const newUser = {
        fullName : {
          firstname : firstname,
          lastname : lastname
          },
          email : email,
          password : password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);

      if(response.status === 201){
        const data = response.data;
      }

      // console.log(userData);
      setEmail('');
      setFirstname('');
      setPassword('');
      setLastname('');
  }

return (
  <div className='p-8 h-screen w-[100dvw] flex flex-col justify-between'>

    
    <div>
    <img className='w-24 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <h1 className='mb-2 w-full text-center text-4xl font-bold font-mono'>Register as User</h1>
    <form action="" onSubmit={(event) => { submitHandler(event) } }>
      <h3 className='text-xl mb-2 font-semibold'>What's your Name</h3>
      <div className="flex gap-4 mb-5">
          <input 
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
          className='bg-[#eeeeee] rounde  py-2 px-4 border text-lg placeholder:text-base w-1/2'
          name="firstname" 
          required 
          id="" 
          placeholder='First name'
          />
          <input 
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className='bg-[#eeeeee] rounded  py-2 px-4 border text-lg placeholder:text-base w-1/2'
          name="lastname" 
          required 
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

      <button 
      className='w-full py-2 text-center bg-black text-white rounded font-semibold text-xl mb-2'
      > 
        Register
      </button>

      <p className='w-full text-center'>Already have an account ? <Link to="/login" className='text-blue-600'>Login</Link></p>
    </form>
    </div>

    <div>
      <p className='text-center '>Uber can make mistakes. <u>Check important info.</u></p>
    </div>
  </div>
)
}

export default UberSignup
