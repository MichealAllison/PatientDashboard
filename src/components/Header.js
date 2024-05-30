import React from 'react'
import TechCare from '../images/TestLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Doctor from '../images/Doctor.png'


export const Header = () => {
  return (
    <div className='NavBar'>
        <div className='Logo'>
            <img src={TechCare} alt='log' width='211px'/>  
        </div>
        
        <div className='NavMenu'>
            <ul>
                <li><FontAwesomeIcon icon={faHome} className='icon'/>Overview</li>
                <li className='active'><FontAwesomeIcon icon={faUser} className='icon'/>Patients</li>
                <li><FontAwesomeIcon icon={faCalendar} className='icon'/>Schedule</li>
                <li><FontAwesomeIcon icon={faMessage} className='icon'/>Message</li>
                <li><FontAwesomeIcon icon={faCreditCard} className='icon'/>Transaction</li>
            </ul>
        </div>

        <div className='Account'>
            <img src={Doctor} alt='img' width='44px' height='44px' />
            <div className='AcountDetails'>
                <h2 className='DoctorName'>Dr. Jose Simmons</h2>
                <p className='Position'>General Practitioner</p>
            </div>
        </div>

        <div className='EndIcons'>
            <FontAwesomeIcon icon={faGear} className='icon'/>
            <FontAwesomeIcon icon={faEllipsisV} className='icon'/>
        </div>
    </div>
  )
}
