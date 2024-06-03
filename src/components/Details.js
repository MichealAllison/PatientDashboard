import React from 'react'

export const Details = ({image, detail, detail2}) => {
  return (
    <div className='details'>
        <div>
            <img src={image} alt='img' width='42px' height='42px'/>
        </div> 
        <div className='preview__details'>
            <h4>{detail}</h4>
            <p>{detail2}</p>
        </div>   
    </div>
  )
}
