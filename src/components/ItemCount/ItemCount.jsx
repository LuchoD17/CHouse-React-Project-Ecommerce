import { useState } from 'react'

const ItemCount = () =>{
    const [number, setNumber] = useState(0)
    
    const sumar = () => {
        if (number < 10) {
            setNumber (number + 1)
        }
        else {
            setNumber (10)
        }
    }
    
    const restar = () => {
        if (number > 0) {
            setNumber (number - 1)
        }
        else {
            setNumber (0)
        }
    }
    return (
        <>
        <h1>{number}</h1>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        </>
    )
}

export default ItemCount