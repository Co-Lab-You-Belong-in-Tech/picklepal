import React from 'react'
import '../styles/invites.css'
import accept from "../assets/images/check.svg"
import reject from "../assets/images/cancel.svg"



function Invites() {
  return (
    <div className='invites'>
      <p className='invites_title'>Pending Invites</p>
      <table class="custom-table">
        
        <tbody>
            <tr>
                <td className='invite-name'>Clara</td>
                <td className='seeking-td'>Partner</td>
                <td>8/12, 09:00</td>
                <td><img src={accept} alt='accept invite'/><img src={reject} alt='reject invite'/></td>
            </tr>
            <tr >
                <td className='invite-name'>Marnie</td>
                <td className='seeking-td'>Opponent</td>
                <td>8/12, 11:00</td>
                <td><img src={accept} alt='accept invite'/><img src={reject} alt='reject invite'/></td>
   
            </tr>
            <tr>
                <td className='invite-name'>Raj</td>
                <td className='seeking-td'>Partner</td>
                <td>8/13, 09:00</td>
                <td><img src={accept} alt='accept invite'/><img src={reject} alt='reject invite'/></td>
   
            </tr>
            <tr>
                <td className='invite-name'>Jorge</td>
                <td className='seeking-td'>Opponent</td>
                <td>8/13, 09:00</td>
                <td><img src={accept} alt='accept invite'/><img src={reject} alt='reject invite'/></td>
   
            </tr> <tr>
                <td className='invite-name'>Eve</td>
                <td className='seeking-td'>Partner</td>
                <td>8/13, 10:00</td>
                <td><img src={accept} alt='accept invite'/><img src={reject} alt='reject invite'/></td>
   
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Invites
