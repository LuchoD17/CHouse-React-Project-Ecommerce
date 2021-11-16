import { useState } from 'react'
function ItemCount (){
    const [number, setNumber] = useState(10)
    
    const sumar = () => {
        setNumber (number + 1)
    }
    
    const restar = () => {
        setNumber (number - 1)
    }
    return (
        <>
        <button onClick={sumar}>+</button>
        <h1>{number}</h1>
        <button onClick={restar}>-</button>
        </>
    )
}

export default ItemCount