import Item from "./Item"
import styles from "./Cart.module.css"
import { useState, useEffect } from "react"
import { Link  } from "react-router-dom"

const Cart = () =>{

    const [cartItems, setCartItems] = useState(() => {
        const storedItems = localStorage.getItem("cartItems");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const handleDeleteBtn = (item)=>{
        setCartItems(prevItems =>{

            const existingItemIndex = prevItems.findIndex(ci => ci.item.id === item.item.id);
            if(item.quantity > 1){
                return prevItems.map((cartItem, index) => 
                    index === existingItemIndex 
                        ? { ...cartItem, quantity: cartItem.quantity - 1}
                        : cartItem
                );
            
            }else{
                return prevItems.filter(cartItem => cartItem !== item);    
            }
            
        })
    }

    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }, [cartItems])

    return(
        <section className={styles.section}>
            <h2>Your's selected items</h2>
            <div className={styles.itemsContainer}>
                {cartItems.length > 0 ?
                    cartItems.map((item)=>
                        <Item  item={item} handleDelete={() => handleDeleteBtn(item)}/>
                    )
                    :
                    <div className={styles.noItemsMessage}>
                        <Link to={"/shop"}>No items yet click here to add them</Link>
                    </div>
                }

            </div>
        </section>
    )
}

export default Cart