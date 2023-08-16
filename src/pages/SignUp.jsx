import React, { useEffect, useState } from 'react'
import '../styles/signup.css'
import { useForm} from "react-hook-form" 
import Button from '../components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function SignUp() {
  const {register,handleSubmit,getValues,formState:{errors,isSubmitting,isSubmitSuccessful}}=useForm()
  const [showPassword,setShowPassword]=useState(false)
  const [step,setStep]=useState(1)
  const [step1Data,setStep1Data]=useState({})
  function togglePasswordType(){
    setShowPassword(!showPassword)
  }
 
  function onSubmit(data){
  if (step===1 && Object.keys(errors).length === 0){
       setStep1Data(getValues())
       setStep(2)
       console.log(step1Data)
    
   }
   else{
    const allData={...step1Data,...data}
    console.log(allData)
   }
  }
  useEffect(() => {
    console.log('step1Data changed:', step1Data);
  }, [step1Data]);


  return (
    <section className='signup-container signInUp-container'>
      <div className='signup-steps'>
        {step==1 &&<div className='signup-step1'></div>}
        {step==2 && <div className='signup-step2'></div>}        

      </div>
       <h2>{step==1?"Let's get started!":"Tell us about yourself."}</h2>

      <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
        
        {step===1 &&
       (<div className='step-1'>
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
      </div>) }
  
  {step ===2 &&
      (<div className='step-2'>
        <label htmlFor='password3' className='signup-label'>Password
       <div className='input-container'>
       <input {...register("password3",{required:"password is required",minLength:{value:5,message:'min length 5 characters'}})}type={`${showPassword?"text":"password"}`} id='password' className='signUp-password'/>
       <p className='icon-right' onClick={togglePasswordType}>{showPassword?<FaEye/>:<FaEyeSlash/>}</p>
       </div>
       <p className='error-message'>{errors.password3?.message}</p>
       </label> 
       <Button type='submit'/>
      </div>)}
      </form>
      <p className='have-acct'>Already have an account? <span>Sign In.</span></p>
     
    </section>
  )
}

export default SignUp
