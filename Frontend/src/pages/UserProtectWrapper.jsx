import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext, { UserDataContext } from '../context/userContext'
import { useContext } from 'react'

const UserProtectWrapper = ({ children }) => {


    const token = localStorage.getItem('token');
    const  navigate = useNavigate();

    // console.log(token);
    

    useEffect(() => {
      if(!token) {
        navigate('/login');
      }
    }, [token])
    

    
  return (
    <>
        { children }
    </>
  )
}

export default UserProtectWrapper