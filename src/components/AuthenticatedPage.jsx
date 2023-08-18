import React, { useState } from 'react'
import Login from './Login'

function AuthenticatedPage({children}) {
    const[isAuth,setIsAuth]=useState(true)
  return (
    <div className='auth-page'>
      {isAuth?children:<Login/>}
    </div>
  )
}

export default AuthenticatedPage
