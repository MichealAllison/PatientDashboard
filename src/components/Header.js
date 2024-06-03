import React from 'react'
import TechCare from '../images/TestLogo.svg'
import Doctor from '../images/Doctor.png'
import Home from '../images/home_FILL0_wght300_GRAD0_opsz24.svg'
import Users from '../images/group_FILL0_wght300_GRAD0_opsz24.svg'
import Calandar from '../images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import Chat from '../images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import Card from '../images/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import Settings from '../images/settings_FILL0_wght300_GRAD0_opsz24.svg'
import More from '../images/more_vert_FILL0_wght300_GRAD0_opsz24.svg'
import { NavMenu } from './NavMenu'



export const Header = () => {
  return (
    <div className='NavBar'>
        <div className='Logo'>
            <img src={TechCare} alt='log' width='211px'/>  
        </div>
        
        <div className='NavMenu'>
            < NavMenu image={Home} navtext='Overview'  />
            < NavMenu image={Users} navtext='Patients' isActive />
            < NavMenu image={Calandar} navtext='Schedule' />
            < NavMenu image={Chat} navtext='Message' />
            < NavMenu image={Card} navtext='Transactions' />

        </div>

        <div className='account'>
            <img src={Doctor} alt='img' width='44px' height='44px' />
            <div className='acountdetails'>
                <h2>Dr. Jose Simmons</h2>
                <p>General Practitioner</p>
            </div>
            <div className='EndIcons'>
            <img src={Settings} alt='log'/>
            <img src={More} alt='log'/>
        </div>
        </div>
    </div>
  )
}
