import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../Assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <div className="text">
            <h1>Explore Our Products</h1>
            <p className='explore-menu-text'>Hand Picked Spices from God's Own Country</p>
            </div>          
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => { setCategory(prev => prev === item.menu_name ? "All" : item.menu_name) }} className='explore-menu-list-item' key={index}>
                            <img src={item.menu_image} alt="" className={category === item.menu_name ? "active" : ""} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
