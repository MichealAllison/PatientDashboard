import React from 'react'
import PatientImage from '../images/Patient Image.png'
import { Details } from './Details';
import Calandar from '../images/Calandar.png'
import Gender from '../images/Gender.png'
import Phone from '../images/Phone.png'
import Secure from '../images/Secure.png'
import Download from '../images/download_FILL0_wght300_GRAD0_opsz24 (1).svg'
import { LabResult } from './LabResult';


export const PatientProfile = () => {
    return (
        <div className='patientprofile'>

            <div className='top__patientprofile'>
                <img src={PatientImage} alt='img' height='200px' width='200px' />
                <h2>Jessica Taylor</h2>

                <div className='details__list'>
                    <Details detail="Date Of Birth" image={Calandar} detail2="August 23, 1996" />
                    <Details detail="Gender" image={Gender} detail2="Female" />
                    <Details detail="Contact Info." image={Phone} detail2="(415) 555-1234" />
                    <Details detail="Emergency" image={Phone} detail2="(415) 555-1234" />
                    <Details detail="Insurance Provider" image={Secure} detail2="Sunrise Health Assurance" />
                </div>
                <button>Show All Information</button>
            </div>

            <div className='bottom__patientprofile'>
                <div className='lab__result'>
                    <h2>Lab Result</h2>
                </div>
                <div className='lab__resultlist'>
                    < LabResult result='Blood Tests' image={Download} />
                    < LabResult result='CT Scans' image={Download} isActive />
                    < LabResult result='Radiology Report' image={Download} />
                    < LabResult result='X-Rays' image={Download} />
                    < LabResult result='Urine Test' image={Download} />
                </div>
            </div>

        </div>
    )
}
