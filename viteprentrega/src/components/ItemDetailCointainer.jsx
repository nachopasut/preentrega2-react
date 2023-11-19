import "./ItemDetailContainer.css"
import { useState, useEffect } from "react" 
import { getProductsById } from "./AsyncMock"
import ItemDetail from "../components/ItemDetailCointainer"
import { useParams } from "react-router-dom"
 
const ItemDetailCointainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()
    useEffect(() =>{
    getProductsById (itemId)
    .then(response =>{
        setProduct(response)
    })
    .catch (error =>{
        console.error(error)
    })
}, [itemId])
return(
    <div className="ItemDetailCointainer">
        <ItemDetail{...product}/>
    </div>
)
}
 export default ItemDetailCointainer

