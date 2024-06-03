import React from 'react'
import { DiagnosisTcrad } from './DiagnosisTcrad'
import Respiratory from '../images/respiratory rate.svg'
import Temperature from '../images/temperature.svg'
import Heart from '../images/HeartBPM.svg'
import PatientChart from './PatientChart'
import { ChartCard } from './ChartCard'


export const DiagnosisHistory = () => {



  return (
    <div className='diagnosishistory'>
      <div className='top__diagnosis'>
        <div className='chart__session'>
        <div className='chart__left'>
          <div className='patientchart__title'>
            <h3>Blood Pressure</h3>
            <p>Last 6 months</p>
          </div>
          <PatientChart />
          </div>

          <div className='chart__right'>
            <ChartCard  charttitle='Systolic' chartvalue='160' chartlevel='Higher than Average'/>
            <ChartCard  charttitle='Diastolic' chartvalue='78' chartlevel='Lower than Average' background='
            charttagcustom' style={{background: '#8c6fe6'}} />
          </div>

        </div>
        

        <div className='top__diagnosiscard'>
          < DiagnosisTcrad image={Respiratory} parametersname='Respiratory Rate'
            value='20 bpm' range='Normal' />
          < DiagnosisTcrad image={Temperature} parametersname='Temperature'
            value='98.6 F' range='Normal' background='custom-background'
            style={{ backgroundColor: '#ffe6e9' }} />
          < DiagnosisTcrad image={Heart} parametersname='Heart Rate'
            value='78 bpm' range='Lower than Average' background='custom-background'
            style={{ backgroundColor: '#ffe6e9' }} />
        </div>
      </div>

      <div className='bottom__diagnosis'>
        <div className='diagnosis'>
          <h2>Diagnostic List</h2>
        </div>

        <table className='diagnosis__list'>
          <thead className='diagnosis__header'>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>Chronic high blood pressure</td>
              <td>Uder Observation</td>
            </tr>
            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance and elevated blood sugar</td>
              <td>Cured</td>
            </tr>
            <tr>
              <td>Asthma</td>
              <td>Recurrent episodes of bronchial constriction</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>Malaria</td>
              <td>Serious one</td>
              <td>Bad</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}
