import React, { useState } from 'react'
import '../styles/signup.css'
import { useForm} from "react-hook-form" 
import Button from '../components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function SignUp() {
  const {register,handleSubmit,formState:{errors,isSubmitting,isSubmitSuccessful}}=useForm()
  const [showPassword,setShowPassword]=useState(false)
  function togglePasswordType(){
    setShowPassword(!showPassword)
  }
  function submit(data){
    console.log(isSubmitting)
    // console.log(isSubmitSuccessful)
  }

  return (
    <section className='signup-container signInUp-container'>
      <div className='signup-steps'>
        <div className='signup-step1'></div>        
      </div>
      <h2>Let's get started!</h2>
      <form className='signup-form' onSubmit={handleSubmit(submit)}>
       <label htmlFor='firstname'> First Name
       <input {...register("firstname",{required:"firstname is required",minLength:{value:2,message:"min lenght is 2"}})} className='signup-input'type='text' id='firstname'/>
       <p className='error-message'>{errors.firstname?.message}</p>
       </label>
       <label htmlFor='lastname'> Last Name
       <input {...register("lastname",{required:"lastname is required",minLength:{value:2,message:"min lenght is 2"}})}type='text' id='lastname'/>
       <p className='error-message'>{errors.lastname?.message}</p>
       </label>
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
       <Button type='submit' text='Continue' classname='signup-btn'/>
      </form>
      <p className='have-acct'>Already have an account? <span>Sign In.</span></p>
     
    </section>
  )
}

export default SignUp
