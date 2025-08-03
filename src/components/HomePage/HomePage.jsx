import { Link } from "react-router-dom"

const HomePage = () =>{
    return(
        <section>
            <div className="slide-show">

            </div>
            <div>
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quae ipsa dolor eaque aperiam explicabo error ullam aliquid aut itaque, doloribus praesentium dolores laborum non odit sunt deleniti. Ea, fugiat!</p>
            </div>
            <Link to="/shop">Start shopping</Link>
        </section>
    )
}

export default HomePage