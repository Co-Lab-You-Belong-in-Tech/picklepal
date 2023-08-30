import React, { useEffect } from 'react'
import Login from '../pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from '../redux/slices/userSlice'


function AuthenticatedPage({children}) {
  const isAuth=useSelector((state)=>state.user.isAuth)
  const dispatch=useDispatch()
  const token = sessionStorage.getItem('auth_token');
  useEffect(() => {
    if (token) {
      dispatch(authenticate(true));
    }
  }, [token]);
  return (
    <div className='auth-page'>
      {isAuth?{children}:<Login/>}
    </div>
  )
}

export default AuthenticatedPage
