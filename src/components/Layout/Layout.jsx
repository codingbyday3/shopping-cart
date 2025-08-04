import { Link,Outlet } from "react-router-dom"
import styles from "./Layout.module.css"

const Layout = ()=>{
    return(
        <>
            <header>
                <Link to={"/"} className={styles.pageHeading}>
                <h1>Shop.com</h1>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link className={styles.headerLink} to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link className={styles.headerLink}  to="/shop">Shop</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout