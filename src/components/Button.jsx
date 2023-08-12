import React from 'react'
import '../styles/button.css'
function Button({text,type,classname}) {
  return (
    <button type={type} className={classname}>
        {text}
    </button>
  )
}

export default Button
