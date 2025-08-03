import { Link,Outlet } from "react-router-dom"
import styles from "./Layout.module.css"

const Layout = ()=>{
    return(
        <>
            <header>
                <h1>Shop.com</h1>
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