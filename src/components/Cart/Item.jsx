import styles from "./Cart.module.css"

const Item = ()=>{
    return(
        <div className={styles.item}>
            <div>
                <img src="" alt="" />
                <div>
                    <strong>Shirt</strong>
                    <p>Quantity: 2</p>
                </div>

            </div>

            <button>-</button>
        </div>
    )
}

export default Item