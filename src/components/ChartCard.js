import React from 'react'

export const ChartCard = ({charttitle, chartvalue, chartlevel, background, style}) => {
  return (
    <div className='chartcard'>
        <div className='cardtitle'>
            <span className={`charttag ${background}`} style={style}></span>
            <h2 className='charttitle'>{charttitle}</h2>
        </div>
        <h2 className='chartvalue'>{chartvalue}</h2>
        <p className='chartlevel'>{chartlevel}</p>
    </div>
  )
}
