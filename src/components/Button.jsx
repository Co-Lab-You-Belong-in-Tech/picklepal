import React from 'react'
import '../styles/button.css'
function Button({text,type,classname,issubmitting,onclick}) {
  return (
    <button type={type} className={classname} onClick={onclick}>
       {issubmitting?<div className='spinner'></div>: text}
    </button>
  )
}

export default Button
