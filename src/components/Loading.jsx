import React from 'react'
import "../styles/modal.css"
import ReactModal from 'react-modal';


function Loading() {
 
  return (
    <ReactModal
    isOpen={true}
    overlayClassName='modal-overlay'
    className='loading-modal-content'
    >
      <div className='spinner spinner_navigation'></div>
  
    </ReactModal>
  )
}

export default Loading
