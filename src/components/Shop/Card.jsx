const Card = () =>{
    return(
        <div className="card">
            <img src="" alt="" />
            <strong>Shirt</strong>
            <p>Price: 10$</p>
            <form>
                <div>
                    <button>-</button>
                    <input type="text" />
                    <button>+</button>
                </div>
                <button type="submit">Add to cart</button>
                
            </form>
        </div>
    )
}

export default Card