import styles from "./Shop.module.css"

const Card = ({title, price, url}) =>{
    return(
        <div className={styles.card}>
            <img src={url}  />
            <strong>{title}</strong>
            <p>Price: {price}$</p>
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