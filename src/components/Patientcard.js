import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
export const Patientcard = ({image, name, gender, age, isActive}) => {

    
  return (
        <div className={`Patient ${isActive ? 'active' : ''}`}>
            <img src={image} alt={name} width='44px' height='44px' />
            <div className='PatientDetails'>
                <h2 className='PatientName'>{name}</h2>
                <p className='Details'>{gender},{age}</p>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} className='icon'/>
        </div>
  )
};
