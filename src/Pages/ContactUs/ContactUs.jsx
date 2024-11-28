import React from 'react'
import './ContactUs.css'
import Contact from '../../Components/Contact/Contact'
import spice1 from '../../Assets/frontend_assets/Five_Spice.jpg'
import spice2 from '../../Assets/frontend_assets/Spice_image.png'
import spice3 from '../../Assets/frontend_assets/Spice_image3.png'
import spice4 from '../../Assets/frontend_assets/Spice_image4.png'

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <img src={spice2} alt="Top Left" className="corner  top-right" id='images'></img>
            <img src={spice1} alt="Top Right" className="corner top-left" id='images' />
            <img src={spice3} alt="Bottom Left" className="corner bottom-left" id='images' />
            <img src={spice4} alt="Bottom Right" className="corner bottom-right" id='images' />
            <Contact />
            {/* <h1>Coming Soon...!</h1> */}
        </div>
    )
}

export default ContactUs
