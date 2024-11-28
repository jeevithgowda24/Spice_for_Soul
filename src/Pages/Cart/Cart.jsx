import React from 'react'
import './Cart.css'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import { useState } from 'react'
import spice1 from '../../Assets/frontend_assets/Five_Spice.jpg'
import spice2 from '../../Assets/frontend_assets/Spice_image.png'
import spice3 from '../../Assets/frontend_assets/Spice_image3.png'
import spice4 from '../../Assets/frontend_assets/Spice_image4.png'

const Cart = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='products-display'>
      <img src={spice2} alt="Top Left" className="corner  top-right" id='images'></img>
      <img src={spice1} alt="Top Right" className="corner top-left" id='images'/>
      <img src={spice3} alt="Bottom Left" className="corner bottom-left" id='images'/>
      <img src={spice4} alt="Bottom Right" className="corner bottom-right" id='images'/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Cart
