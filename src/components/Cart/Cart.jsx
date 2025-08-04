import Item from "./Item"
import styles from "./Cart.module.css"

const Cart = () =>{
    return(
        <section className={styles.section}>
            <h2>Your's selected items</h2>
            <div className={styles.itemsContainer}>
                <Item />
                <Item />
                <Item />
            </div>
        </section>
    )
}

export default Cart