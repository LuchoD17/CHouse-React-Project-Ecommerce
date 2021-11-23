import React from "react";
import './Item.css'

const Item = ({ item }) => {
    return(
        <>
            <div className="container">
                <div className="card">
                    <img src={item.img} className="cardImg" alt="producto"></img>
                    <div className="cardData">
                        <h1 className="cardTitle">{item.name}</h1>
                        <p class="cardDescription">{item.description}</p>
                        <span className="cardPrice">{item.price}</span>
                        <a href="{item.img}" className="cardButton">More Products</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item