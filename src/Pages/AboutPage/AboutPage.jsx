import React from 'react'
import './AboutPage.css'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import Team from '../../Components/Team/Team'
import Policy from '../../Components/Policy/Policy'
import LIcenses from '../../Components/Licenses/LIcenses'

const AboutPage = () => {
  return (
    <div className='AboutPage'>
      <AboutCompany/>
      <Team/>
       <Policy/>
       <LIcenses/>
    </div>
  )
}

export default AboutPage

