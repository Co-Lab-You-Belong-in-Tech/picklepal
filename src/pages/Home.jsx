import React from 'react'
import '../styles/home.css'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <section className='home'>
      <div className='home_container'>
      <img src={logo} alt='picklepals logo' className='home-logo'/>
      <h1>Effortless pickleball matchmaking in Toronto. ✨</h1>
      <p className='home_hero-text'>Find a partner or opponent, locate a court, and build a profile to simply enjoy your pickleball passion.</p>
      <NavLink to='/signup'><Button type='submit' text='Sign Up' classname='button_signup'/></NavLink>
      <p className='have-acct'>Already have an account? <span>Sign In.</span></p>
      </div>
    </section>
  )
}

export default Home
