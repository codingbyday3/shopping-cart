import Item from "./Item"
import styles from "./Cart.module.css"
import { useState, useEffect } from "react"

const Cart = () =>{

    const [cartItems, setCartItems] = useState(() => {
        const storedItems = localStorage.getItem("cartItems");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    console.log(cartItems)

    return(
        <section className={styles.section}>
            <h2>Your's selected items</h2>
            <div className={styles.itemsContainer}>
                {
                    cartItems.map((item)=>
                        <Item  item={item}/>
                    )
                }

            </div>
        </section>
    )
}

export default Cart