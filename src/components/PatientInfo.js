import React from 'react'
import { Patientcard } from './Patientcard'
import Patient1 from '../images/Patient.png'
import Patient2 from '../images/Patient2.png'
import Patient3 from '../images/Patient3.png'
import Patient4 from '../images/Patient4.png'
import Patient5 from '../images/Patient5.png'
import Patient6 from '../images/Patient6.png'
import Patient7 from '../images/Patient7.png'
import Patient8 from '../images/Patient8.png'
import Search from '../images/search_FILL0_wght300_GRAD0_opsz24.svg'

export const PatientInfo = () => {

  return (
    <div className='PatientInfo'>
      <div className='TopContent'>
        <h2>Patients</h2>
        <img src={Search} alt='img' />
      </div>
      <div className='PatientCardSection'>
        <Patientcard image={Patient1} name="Emilly Williams" gender="Female" age="18" />
        <Patientcard image={Patient2} name="Ryan Johnson" gender="Male" age="45"/>
        <Patientcard image={Patient3} name="Brandon Mitchell" gender="Male" age="36"/>
        <Patientcard image={Patient4} name="Jessica Taylor" gender="Female" age="28" isActive/>
        <Patientcard image={Patient5} name="Samantha Johnson" gender="Female" age="56"/>
        <Patientcard image={Patient6} name="Ashely Martinez" gender="Female" age="54"/>
        <Patientcard image={Patient7} name="Olivia Brown" gender="Female" age="32"/>
        <Patientcard image={Patient8} name="Tyler Davis " gender="Male" age="19"/>
        <Patientcard image={Patient8} name="Tyler Davis " gender="Male" age="19"/>
        <Patientcard image={Patient8} name="Tyler Davis " gender="Male" age="19"/>
        <Patientcard image={Patient8} name="Tyler Davis " gender="Male" age="19"/>
        <Patientcard image={Patient8} name="Tyler Davis " gender="Male" age="19"/>
      </div>
    </div>
  )
}
