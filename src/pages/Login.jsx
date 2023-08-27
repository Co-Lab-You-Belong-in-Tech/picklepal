import React, {  useState } from 'react'
import '../styles/signup.css'
import '../styles/login.css'
import { useForm} from "react-hook-form" 
import Button from '../components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authenticate } from '../redux/slices/userSlice'

function Login() {
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm()
  const [showPassword,setShowPassword]=useState(false)
  const [error,setError]=useState('')
  const navigateTo=useNavigate()
  const dispatch=useDispatch()
  function togglePasswordType(){
    setShowPassword(!showPassword)
  }
  async function login(data){
    console.log(data)
    try{
      const response=await axios.post("https://pickleball.cyclic.app/api/login",data)
      const  userData=JSON.stringify(response.data.data)
      sessionStorage.setItem('user_info',userData)
      const token=response.data.data.auth_token
      sessionStorage.setItem('auth_token',token)
      navigateTo("/profile")
      dispatch(authenticate(true));

     }
     catch(err){
      console.warn(err.response.data.msg)
      setError(err.response.data.msg)
     }
      
     
  }
  return (
    <section className='login-container signInUp-container'>
    <h2>Welcome Back!</h2>
    <form onSubmit={handleSubmit(login)}>
       
       <label htmlFor='email'>Email Address
       <input {...register("email",{required:"email is required",pattern:
       {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message:'Invalid email format'}
      })}type='text' id='email'/>
       <p className='error-message'>{errors.email?.message}</p>
       </label>
       <label htmlFor='password' className='signup-label'>Password
       <div className='input-container'>
       <input {...register("password",{required:"password is required",minLength:{value:5,message:'min length 5 characters'}})}type={`${showPassword?"text":"password"}`} id='password' className='signUp-password'/>
       <p className='icon-right' onClick={togglePasswordType}>{showPassword?<FaEye/>:<FaEyeSlash/>}</p>
       </div>
       <p className='error-message'>{errors.password?.message}</p>
       </label> 
       <Button type='submit' text='Continue' classname='login-btn' issubmitting={isSubmitting}/>
       <p className='error-message' style={{'fontSize':'1.5rem','marginTop':'1rem'}}>{error}</p>
 
    </form>
   
      <p className='have-acct'>Don’t have an account yet? <span className='signup'><NavLink to='/signup'>Sign Up.</NavLink></span></p>
    
    </section>
  )
}

export default Login
