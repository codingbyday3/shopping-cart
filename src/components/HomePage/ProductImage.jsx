import { useState, useEffect } from "react"
import styles from "./HomePage.module.css"


const ProductImage = ()=>{
    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)
    const [displayedItem, setDisplayedItem] = useState(0)

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

    useEffect(() =>{
        const key = setInterval(()=>{
            setDisplayedItem(item => (item + 1) % items.length)
        },3000)

        return ()=>{
            clearInterval(key)
        }

    },[items])

    return(
        <div className={styles.imageContainer}>
            
            {(loading || !items)?
                <div>Loading...</div>
                :
                <img className={styles.image} src={items[displayedItem].image} alt={items[displayedItem].title} />
            }
        </div>
    )
}

export default ProductImage