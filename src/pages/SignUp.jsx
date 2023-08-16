import React, { useEffect, useState } from 'react'
import '../styles/signup.css'
import { useForm} from "react-hook-form" 
import Button from '../components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function SignUp() {
  const {register,handleSubmit,getValues,setValue,formState:{errors,isSubmitting,isSubmitSuccessful}}=useForm()
  const [showPassword,setShowPassword]=useState(false)
  const [step,setStep]=useState(1)
  const [step1Data,setStep1Data]=useState({})
  const [level,setLevel]=useState("")
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
    console.log('alldata',allData)
    try{

    }
    catch(err){
      console.warn(err)
    }
   }
  }
  useEffect(() => {
    console.log('step1Data changed:', step1Data);
  }, [step1Data]);


  return (
    <section className='signup-container signInUp-container'>
      <div className='signup-steps'>
        {<div className={`signup-step1 ${step===2 ? 'signup-step2' : ''}`}></div>}
           

      </div>
       <h2>{step==1?"Let's get started!":"Tell us about yourself."}</h2>

      <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
        
        {step===1 &&
       (<div className='step-1-container'>
        <label htmlFor='firstName'> First Name
       <input {...register("firstName",{required:"firstName is required",minLength:{value:2,message:"min lenght is 2"}})} className='signup-input'type='text' id='firstName'/>
       <p className='error-message'>{errors.firstName?.message}</p>
       </label>
       <label htmlFor='lastName'> Last Name
       <input {...register("lastName",{required:"lastName is required",minLength:{value:2,message:"min lenght is 2"}})}type='text' id='lastName'/>
       <p className='error-message'>{errors.lastName?.message}</p>
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
       <p className='have-acct'>Already have an account? <span>Sign In.</span></p>
    
      </div>) }
  
  {step ===2 &&
      (<div className='step-2-container'>
  <p className='step-2_title'>My player level is .....</p>     
  <div className='step-2_options player-level'>      
         
  <input {...register('player_level')} type="radio" id="beginner" name="select" value="1" checked={level==='beginner'}/>
  <label htmlFor="beginner">
    <p onClick={()=>{setLevel('beginner');setValue('player_level', 'beginner')}}>Beginner</p>
  </label>  
     
     
  <input type="radio" onChange={() => setLevel('intermediate')} id="intermediate" name="select" value="1" checked={level==='intermediate'}/>
  <label htmlFor="intermediate">
    <p onClick={()=>{setLevel('intermediate');setValue('player_level', 'intermediate')}}>Intermediate</p>
  </label>
     
  <input  type="radio" onChange={() => setLevel('advanced')} id="advanced" name="select" value="1" checked={level==='advanced'}/>
  <label htmlFor="advanced">
    <p onClick={()=>{setLevel('advanced');setValue('player_level', 'advanced')}}>Advanced</p>
  </label> 
  </div>

       <Button type='submit' text='Submit'/>
      </div>)}
      </form>
     
    </section>
  )
}

export default SignUp
