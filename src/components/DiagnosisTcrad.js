import React from 'react'

export const DiagnosisTcrad = ({image, parametersname, value, range, background, style}) => {

 

  return (
    <div className={`diagnosistcard ${background}`} style={style} >
        <img src={image} alt='img' width='96px' height='96px' />
        <div className='parameters'>
            <p>{parametersname}</p>
            <h2>{value}</h2>
        </div>
        <p className='para'>{range}</p>
    </div>
  )
}
