import styles from "./Cart.module.css"


const Item = ({item})=>{

    return(
        <div className={styles.item}>
            <div>
                <img src={item.item.image} alt="" />
                <div>
                    <strong>{item.item.title}</strong>
                    <p>Quantity: </p>
                </div>

            </div>

            <button>-</button>
        </div>
    )
}

export default Item