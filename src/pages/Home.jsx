import React from 'react'
import '../styles/home.css'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
function Home() {
  return (
    <section className='home'>
      <div className='home_container'>
      <img src={logo} alt='picklepals logo' className='home-logo'/>
      <h1>Effortless pickleball matchmaking in Toronto. ✨</h1>
      <p className='home_hero-text'>Find a partner or opponent, locate a court, and build a profile to simply enjoy your pickleball passion.</p>
      <Button type='submit' text='Sign Up' classname='button_signup'/>
      <p className='have-acct'>Already have an account? <span>Sign In.</span></p>
      </div>
    </section>
  )
}

export default Home
