import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display'>
            <h2>Top Products</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} name1={item.name1} name2={item.name2}/>
                    }
                    return null;

                })}
            </div>
        </div>
    )
}

export default FoodDisplay
