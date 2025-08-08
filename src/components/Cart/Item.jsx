import styles from "./Cart.module.css"


const Item = ({item, handleDelete})=>{


    return(
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <img src={item.item.image} alt="" />
                <div>
                    <strong>{item.item.title}</strong>
                    <p>Quantity: {item.quantity}</p>
                </div>

            </div>

            <button onClick={handleDelete}>-</button>
        </div>
    )
}

export default Item