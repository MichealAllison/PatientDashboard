import React from 'react'

export const DiagnosisList = ({diagnosis, description, status}) => {
  return (
    <div className='diagnosis__card'>
        <h2>{diagnosis}</h2>
        <h2>{description}</h2>
        <h2>{status}</h2>
    </div>
  )
}
