import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                       <img src={assets.logo_text} alt="" />
                      <p>Spice for Soul, an endeavor by Regalia Exim, stands as a testament to the rich tapestry of flavors that emanate from God’s Own Country, Kerala. This all-women venture is a beacon of authenticity, dedicated to promoting unadulterated and exotic spices to the global palate. Hailing from the verdant landscapes of Kerala, the spices curated by Spice for Soul encapsulate the essence of centuries-old culinary traditions.</p>
                      <div className="footer-social-icons">
                        {/* <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" /> */}
                               <Link to='/contact'><button>Contact Us</button></Link> 
                      </div>
                </div>
                <div className="footer-content-center">
                      <h2>COMPANY</h2>
                      <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.9037636607545!2d76.60512507503144!3d10.024799990081892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAxJzI5LjMiTiA3NsKwMzYnMjcuNyJF!5e0!3m2!1sen!2sin!4v1732678171152!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                   
                </div>
                <div className="footer-content-right">
                      <h2>GET IN TOUCH</h2>
                      <ul>
                        <li><a href="tel:9074882473">+91-9074882473</a></li>
                        <li><a href="mailto:info@spiceforsoul.in">info@spiceforsoul.in</a></li>
                        <li>Regalia Exim ®<br/> #24/125, Kothamangalam ,Karukadom P.O,Ernakulam, Kerala, India-686691</li>
                      </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                Copyright 2024 Spice for Soul ® - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
