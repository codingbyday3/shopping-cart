import styles from "./Shop.module.css"

const Card = () =>{
    return(
        <div className={styles.card}>
            <img src="" alt="" />
            <strong>Shirt</strong>
            <p>Price: 10$</p>
            <form className={styles.form}>
                <div> 
                    <button className={styles.decrement}>-</button>
                    <input type="tel" />
                    <button className={styles.increment}>+</button>
                </div>
                <button type="submit">Add to cart</button>
                
            </form>
        </div>
    )
}

export default Card