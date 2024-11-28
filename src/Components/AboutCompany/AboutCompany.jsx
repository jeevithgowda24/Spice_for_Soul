import React from 'react'
import './AboutCompany.css'
import Image from '../../Assets/frontend_assets/Spices_Image.jpg'
import vision from '../../Assets/frontend_assets/vision.png'
import mission from '../../Assets/frontend_assets/mission.png'

const AboutCompany = () => {
  return (
    <div className='About-Company'>
      <h1>About Our Company</h1>
      <div className="about-row">
        <div className="about-col">
          <img src={Image} alt="" />
        </div>
        <div className="about-col">
          <p><span>Welcome to Spice for Soul by Regalia Exim ®</span>, where passion meets integrity and every spice tells a story of excellence. We're dedicated to delivering the world's finest, most authentic spices that elevate every culinary experience. Guided by our core values of reliability, quality, and trust, we ensure that every product reflects our commitment to excellence. Our spices are carefully sourced from trusted, sustainable growers and undergo rigorous quality checks to guarantee their purity, freshness, and authenticity. <br />  <br />
            From farm to table, we prioritize: <br />
            - Sustainability: Environmentally friendly practices that preserve natural resources <br />
            - Ethical sourcing: Fair trade practices that empower local communities <br />
            - Unparalleled craftsmanship: Dedication to delivering exceptional quality and flavor
            <br /> <br />
            With years of expertise and a passion for authentic flavor, Spice for Soul by Regalia Exim has become a name synonymous with trust, quality, and excellence. Let us bring the essence of the finest spices to your table, enriching your meals and creating unforgettable culinary experiences.</p>
        </div>
      </div>

      <div className="vis-mis-container">
        <div className="vision">
          <img src={vision} alt="" />
          <div className="vision-dec">
            <h3>VISION</h3>
            <p><span>Empowering Global Flavors, Sustainably.</span><br />
              We envision a world where every dish is elevated by the finest, sustainably sourced spices. As a global leader in the spice export industry, we strive to deliver exceptional quality spices that inspire culinary excellence and enrich flavors worldwide.
            </p>
          </div>
        </div>
        <div className="mission">
          <img src={mission} alt="" />
          <div className="mission-dec">
            <h3>MISSION</h3>
            <p> <span>Sourcing with Integrity, Delivering with Passion.</span> <br/>

              Our mission is to provide premium, ethically sourced spices that exceed our customers' expectations.</p>
          </div>
        </div>
      </div>





    </div>
  )
}

export default AboutCompany