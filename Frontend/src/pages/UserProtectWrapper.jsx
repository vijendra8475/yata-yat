import React from 'react'
import { useNavigate } from 'react-router-dom'
import userContext, { UserDataContext } from '../context/userContext'
import { useContext } from 'react'

const UserProtectWrapper = ({ children }) => {


    const token = localStorage.getItem('token');
    const  navigate = useNavigate();

    // console.log(token);
    

    if(!token) {
        navigate('/login');
    }

    
  return (
    <>
        { children }
    </>
  )
}

export default UserProtectWrapper