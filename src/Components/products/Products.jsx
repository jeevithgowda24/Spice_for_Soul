import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import '../Navbar/Navbar.css'
import { useState } from 'react';

// import Image5 from '../../Assets/frontend_assets/Image5.jpeg'
// import Image6 from '../../Assets/frontend_assets/Image6.jpg'
// import Image8 from '../../Assets/frontend_assets/Image8.jpg'
import Whole_Spices from '../../Assets/frontend_assets/Whole_Spices.jpg'
import Powder_Spices from '../../Assets/frontend_assets/Powder_Spices.jpg'
import olerosins from '../../Assets/frontend_assets/Oleorisins1.jpeg'

const Products = () => {
    const [menu, setMenu]=useState("home");
    return (

        <>
           <h1 className='title' id='title'>OUR PRODUCTS / UNSERE PRODUKTE / ہمارے مصنوعات</h1>
            <div className='programs'>
                <div className="program">
                    <img src={Whole_Spices} alt="" />
                    <div className="caption">
                    <Link to='/products'><p onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Raw Spices </p></Link>
                    </div>
                </div>
                <div className="program">
                    <img src={Powder_Spices} alt="" />
                    <div className="caption">
                    <Link to='/products'><p onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Powder Spices </p></Link>
                    </div>

                </div>
                <div className="program">
                    <img src={olerosins} alt="" />
                    <div className="caption">
                    <Link to='/products'><p onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Oleoresins</p></Link>
                    </div>

                </div>

            </div>
        </>



    )
}

export default Products
