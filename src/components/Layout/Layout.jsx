import { Link,Outlet, useLocation } from "react-router-dom"
import styles from "./Layout.module.css"
import { useState, useEffect } from "react"

const Layout = ()=>{
    const [showBurgerMenu, setShowBurgerMenu] = useState(false)
    const location = useLocation()

    useEffect(() =>{
        setShowBurgerMenu(false)
    }, [location.pathname])

    const toggleBurgerMenu = ()=>{
        setShowBurgerMenu(prev => !prev)
    }
    return(
        <>
            <header>
                <Link to={"/"} className={styles.pageHeading}>
                <h1>Shop.com</h1>
                </Link>

                <nav>
                    <div className={styles.burgerMenu} onClick={toggleBurgerMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>menu</title>
                            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                        </svg>
                    </div>
                    {showBurgerMenu &&
                        <ul id="nav">
                            <li>
                                <Link className={styles.headerLink} to="/">Home Page</Link>
                            </li>
                            <li>
                                <Link className={styles.headerLink}  to="/shop">Shop</Link>
                            </li>
                        </ul>
                    }

                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout