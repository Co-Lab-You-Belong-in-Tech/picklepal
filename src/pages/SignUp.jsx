import React from 'react'
import '../styles/signup.css'
import { useForm} from "react-hook-form" 
import Button from '../components/Button'

function SignUp() {
  const {register}=useForm()
  return (
    <section className='signup-container'>
      <div className='signup-steps'>
        <div className='signup-step1'></div>        
      </div>
      <h2>Let's get started!</h2>
      <form className='signup-form'>
       <label htmlFor='firstname'> First Name
       <input {...register("firstname")} className='signup-input'type='text' id='firstname'/>
       </label>
       <label htmlFor='lastname'> Last Name
       <input {...register("lastname")}type='text' id='lastname'/>
       </label>
       <label htmlFor='email'>Email Address
       <input {...register("email")}type='text' id='email'/>
       </label>
       <label htmlFor='password'>Password
       <input {...register("password")}type='password' id='password'/>
       </label> 
       <Button type='submit' text='Continue' classname='signup-btn'/>
      </form>
      <p className='have-acct'>Already have an account? <span>Sign In.</span></p>
     
    </section>
  )
}

export default SignUp
