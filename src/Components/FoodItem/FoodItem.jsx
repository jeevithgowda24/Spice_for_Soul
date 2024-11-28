import React, { useState } from 'react'
import './Fooditem.css'
import ReactCardFlip from 'react-card-flip'


const FoodItem = ({ id, name, price, description, image, name1, name2 }) => {

    const [isFlipped, setIsFlipped] = useState(false);


    function flipCard() {
        setIsFlipped(!isFlipped)
    }


    return (
        <div className='food-item'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>

                <div className="food-item-img-container" onClick={()=>flipCard()}>
                    <img src={image} alt="" className="food-item-image" />
                    <div className="food-item-name-rating" >
                        <p>{name1}</p>
                        <p>{name}</p>
                        <p>{name2}</p>

                    </div>
                </div>
                <div className="food-item-info">

                    <div className='food-item-back' onClick={()=>flipCard()}>
                        <p className="food-item-desc">
                            {description}</p>
                    </div>

                </div>
            </ReactCardFlip>

        </div>
    )
}

export default FoodItem
