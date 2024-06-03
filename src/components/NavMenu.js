import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

export const NavMenu = ({image, navtext, isActive}) => {
  return (
    <div className={`navmenu ${isActive ? 'active' : ''}`}>
        <img src={image} alt={icon} width='24px' height='17px' />
        <h3 className='menutext'>{navtext}</h3>
    </div>
  )
}
