import React from 'react'
import './WhyChoose.css'
import Image from '../../Assets/frontend_assets/full_spices.png'

const WhyChoose = () => {
    return (
        <div className='whychoose'>


            <div className="row">
               

                <div className="column">
                    <h1>Why Choose Us?</h1>
                    <li>Direct Sourcing from Farmers: We ensure authenticity by working directly with farmers, cutting out intermediaries.</li>
                    <li>Chemical-Free Products: Committed to health and sustainability, we deliver only pure, chemical-free goods.</li>
                    <li>100% Local Sourcing: Supporting the local economy by sourcing all our products from nearby communities.</li>
                    <li>Quick Payments: Prompt payment to MSMEs and farmers after stringent quality assurance checks.</li>
                    <li>Trusted Partner: We pride ourselves on dependable quality delivery and nurturing lasting relationships.</li>
                </div>

                <div className="column">
                    <img src={Image} alt="image1" />
                </div>
            </div>



        </div>
    )
}

export default WhyChoose
