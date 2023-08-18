import React, { useEffect, useState } from 'react'
import '../styles/signup.css'
import { useForm} from "react-hook-form" 
import Button from '../components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



function SignUp() {
  const {register,handleSubmit,getValues,setValue,formState:{errors,isSubmitting}}=useForm()
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
    const start=data.from_time
    const end=data.to_time 
    const availability_time={
      start,
      end
    }
    
  const all_days=[data.mon,data.tues,data.wed,data.thur,data.fri,data.sat,data.sun]
  const availability_day=all_days.filter((day)=>day != null)
 
  const allData={...step1Data,...data,availability_time,availability_day}
  const { from_time, to_time, mon,tues,wed,thur,fri,sat,sun, ...filtereddata } = allData;
    
    
    console.log(filtereddata)
   
   }
  }
  useEffect(() => {
    console.log('step1Data changed:', step1Data);
  }, [step1Data]);


  return (
    <section className={`${step===2?'increase-width':""} signup-container signInUp-container`}>
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
         
  <input {...register('Player_level')} type="radio" id="beginner" name="level" />
  <label htmlFor="beginner">
    <p onClick={()=>{setValue('Player_level', 'beginner')}}>Beginner</p>
  </label>  
     
     
  <input type="radio" name="level" id='intermediate' />
  <label htmlFor="intermediate">
    <p onClick={()=>{setValue('Player_level', 'intermediate')}}>Intermediate</p>
  </label>
     
  <input  type="radio"  id="advanced" name="level"  />
  <label htmlFor="advanced">
    <p onClick={()=>{setValue('Player_level', 'advanced')}}>Advanced</p>
  </label> 
  </div>
 
  <p className='step-2_title'>I’m available on...</p>
  <div className='step-2_options availability'>      
         <input {...register('mon')} type="radio" id="mon" value='monday' />
         <label htmlFor="mon">
           <p>Mon.</p>
         </label>  
         <input  {...register('tues')} type="radio" id="tues" value='tuesday'  />
         <label htmlFor="tues">
           <p >Tues.</p>
         </label>
         <input {...register('wed')}  type="radio" id="wed" value='wednesday' />
         <label htmlFor="wed">
           <p >Wed.</p>
         </label>  
         <input  {...register('thur')} type="radio" id="thurs" value='thursday' />
         <label htmlFor="thurs">
           <p>Thurs.</p>
         </label>
         <input  {...register('fri')}  type="radio" id="fri" value='friday'  />
         <label htmlFor="fri">
           <p >Fri.</p>
         </label>
         <input {...register('sat')}  type="radio" id="sat" value='saturday'  />
         <label htmlFor="sat">
           <p >Sat.</p>
         </label> 
         <input  {...register('sun')}  type="radio" id="sun" value='sunday' />
         <label htmlFor="sun">
           <p>Sun.</p>
         </label>
  </div>
  <p className='step-2_title'>from... to...</p>
  <div className='step-2_options time'>      
  
  <select {...register("from_time")} id="from-time" className="time-dropdown">
  <option value="00:00">00:00</option> 
  <option value="01:00">01:00</option> 
  <option value="02:00">02:00</option> 
  <option value="03:00">03:00</option> 
  <option value="04:00">04:00</option> 
  <option value="05:00">05:00</option> 
  <option value="06:00">06:00</option> 
  <option value="07:00">07:00</option> 
  <option value="08:00">08:00</option> 
  <option value="09:00">09:00</option> 
  <option value="10:00">10:00</option> 
  <option value="11:00">11:00</option> 
  <option value="12:00">12:00</option> 
  <option value="13:00">13:00</option> 
  <option value="14:00">14:00</option>
  <option value="15:00">15:00</option>  
  <option value="16:00">16:00</option> 
  <option value="17:00">17:00</option> 
  <option value="18:00">18:00</option> 
  <option value="19:00">19:00</option> 
  <option value="20:00">20:00</option> 
  <option value="21:00">21:00</option> 
  <option value="22:00">22:00</option> 
  <option value="23:00">23:00</option> 

  </select>  
 

  <select {...register("to_time")} id="to-time" className="time-dropdown">
  <option value="00:00">00:00</option> 
  <option value="01:00">01:00</option> 
  <option value="02:00">02:00</option> 
  <option value="03:00">03:00</option> 
  <option value="04:00">04:00</option> 
  <option value="05:00">05:00</option> 
  <option value="06:00">06:00</option> 
  <option value="07:00">07:00</option> 
  <option value="08:00">08:00</option> 
  <option value="09:00">09:00</option> 
  <option value="10:00">10:00</option> 
  <option value="11:00">11:00</option> 
  <option value="12:00">12:00</option> 
  <option value="13:00">13:00</option> 
  <option value="14:00">14:00</option>
  <option value="15:00">15:00</option>  
  <option value="16:00">16:00</option> 
  <option value="17:00">17:00</option> 
  <option value="18:00">18:00</option> 
  <option value="19:00">19:00</option> 
  <option value="20:00">20:00</option> 
  <option value="21:00">21:00</option> 
  <option value="22:00">22:00</option> 
  <option value="23:00">23:00</option> 
  </select>  
  </div>

  <p className='step-2_title'>Seeking...</p>
  <div className='step-2_options seeking-type'>      
         
        
         <input {...register("seeking_type")} type="radio" id="partner" name='seeking_type' value="partner"/>
         <label htmlFor="partner" onClick={()=>{setValue('seeking_type', 'partner')}}>
           <p>Partner</p>
         </label>
         <input  type="radio" id="opponent" name='seeking_type' value="opponent"/>
         <label htmlFor="opponent" onClick={()=>{setValue('seeking_type', 'opponent')}}>
           <p>Opponent</p>
         </label>
          

  </div>
       <Button type='submit' text='Submit' issubmitting={isSubmitting}/>
      </div>)}
      </form>
     
    </section>
  )
}

export default SignUp
