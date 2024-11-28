import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'

import About from '../../Components/About/About'
import Products from '../../Components/products/Products'
import WhyChoose from '../../Components/WhyChooseUs/WhyChoose'


const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Products/>
      <About/>
      <WhyChoose/>


    </div>
  )
}

export default Home
