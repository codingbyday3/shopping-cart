import HomePage from "./components/HomePage/HomePage"
import Shop from "./components/Shop/Shop"
import Cart from './components/Cart/Cart'

const routes = [
    {
        path:"/",
        element:<HomePage />
    },
    {
        path:"/shop",
        element:<Shop />
    },
    {
        path:"/cart",
        element:<Cart />
    }
]

export default routes