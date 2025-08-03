import { Link,Outlet } from "react-router-dom"

const Layout = ()=>{
    return(
        <>
            <header>
                <h1>Shop.com</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
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