import { useState, useEffect } from "react"



const ProductImage = ()=>{
    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getPruductImages = async ()=>{
            try{
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setItems(data)
            }catch (error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getPruductImages()  

    },[])


    return(
        <div>
            <button>{"<"}</button>
            {(loading || !items)?
                <div>Loading...</div>
                :
                <img src={items[0].image} alt="" />
            }
            <button>{">"}</button>
        </div>
    )
}

export default ProductImage