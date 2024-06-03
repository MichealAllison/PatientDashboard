import React from 'react'

export const LabResult = ({image, result, isActive}) => {
  return (
    <div className={`lab__resultcard ${isActive ? 'activeresult' : ''}`}>
        <h2>{result}</h2>
        <img src={image} alt='log' width='20px' height='20px'/>
    </div>
  )
}
