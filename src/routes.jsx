import HomePage from "./components/HomePage/HomePage"
import Shop from "./components/Shop/Shop"
import Cart from './components/Cart/Cart'
import Layout from "./components/Layout/Layout"

const routes = [
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                index:true,
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
    },

]

export default routes