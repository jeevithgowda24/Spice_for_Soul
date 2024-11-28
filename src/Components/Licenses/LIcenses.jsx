import React from 'react'
import './Licenses.css'
import APEDA from '../../Assets/frontend_assets/APEDA_logo.jpg'
import SB from '../../Assets/frontend_assets/Spices_Board_of_India_Logo.png'
import customs from '../../Assets/frontend_assets/CUSTOMS_logo.jpg'
import FISSAI from '../../Assets/frontend_assets/FSSAI_logo.png'
import GST from '../../Assets/frontend_assets/GST_logo.jpeg'
import UDYAM from '../../Assets/frontend_assets/UDYAM_logo.png'

const LIcenses = () => {
    return (
        <div className='licenses'>
            <h1 className='heading'>Our Licenses</h1>
            <div className="license-img-container">
                <img src={APEDA} alt="" />
                <img src={SB} alt="" />
                <img src={customs} alt="" />
                <img src={FISSAI} alt="" />
                <img src={GST} alt="" />
                <img src={UDYAM} alt="" />
            </div>

        </div>
    )
}

export default LIcenses
