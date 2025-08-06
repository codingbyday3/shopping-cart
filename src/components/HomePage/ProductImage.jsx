import { useState, useEffect } from "react"
import styles from "./HomePage.module.css"


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
        <div className={styles.imageContainer}>
            
            {(loading || !items)?
                <div>Loading...</div>
                :
                <img className={styles.image} src={items[1].image} alt={items[0].title} />
            }
        </div>
    )
}

export default ProductImage