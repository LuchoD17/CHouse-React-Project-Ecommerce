import React, { useEffect, useState } from 'react';
import  ItemList from '../Item/ItemList';
import { products } from '../Item/items'

const ItemListContainer = ({ greeting }) =>{
    const [items, setItems] = useState([])

    useEffect (()=>{
        const bringProducts = new Promise ((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products)
            }, 2000)
        })
        
        bringProducts.then((res) =>{
            setItems(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])

    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <p>Siglo 21 foto digital</p>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer