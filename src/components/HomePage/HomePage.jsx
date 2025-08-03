import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"

const HomePage = () =>{
    return(
        <section className={styles.section}>
            <h2 className={styles.heading}>About us</h2>
            <div className={styles.imagesContainer}>
                <img src="" alt="" />
            </div>
            <div className={styles.description}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quae ipsa dolor eaque aperiam explicabo error ullam aliquid aut itaque, doloribus praesentium dolores laborum non odit sunt deleniti. Ea, fugiat!
                </p>
                <Link to="/shop">Start shopping</Link>
            </div>
        </section>
    )
}

export default HomePage