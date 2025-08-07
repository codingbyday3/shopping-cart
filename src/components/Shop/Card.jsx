import { useState } from "react"
import styles from "./Shop.module.css"

const Card = ({item, addToCart}) =>{

    const [displayedQuantity, setDisplayedQuantity] = useState(1)

    const handleIncrementBtn = (e)=>{
        e.preventDefault()
        setDisplayedQuantity(num => num + 1)
    }

    const handleDecrementButton = (e)=>{
        e.preventDefault()
        if(displayedQuantity > 1){
            setDisplayedQuantity(num => num - 1)
        }
    }

    const handInputChange = (e)=>{
        const value = Number(e.target.value)
        setDisplayedQuantity(value)
    }

    return(
        <div className={styles.card}>
            <img src={item.image}  />
            <strong>{item.title}</strong>
            <p>Price: {item.price}$</p>
            <form onSubmit={(e) => addToCart(e, item, displayedQuantity)} className={styles.form}>
                <div> 
                    <button onClick={handleDecrementButton} className={styles.decrement}>-</button>
                    <input onChange={handInputChange} value={displayedQuantity} aria-label="quantity" type="tel" />
                    <button onClick={handleIncrementBtn}  className={styles.increment}>+</button>
                </div>
                <button type="submit">Add to cart</button>
                
            </form>
        </div>
    )
}

export default Card