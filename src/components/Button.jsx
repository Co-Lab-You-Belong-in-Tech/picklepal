import React from 'react'
import '../styles/button.css'
function Button({text,type,classname,issubmitting}) {
  return (
    <button type={type} className={classname}>
       {issubmitting?<div className='spinner'></div>: text}
    </button>
  )
}

export default Button
