import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import{ getProducts} from '../components/AsyncMock'
import ItemList from '../components/ItemList'
import { useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) =>{
    const [products,setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() =>{
        const asynFunc = categoryId ? getProductsByCategory : getProducts
        asynFunc(categoryId)
        .then(response => {
            setProducts (response)
        })
        .catch(error =>{
            console.error(error)
        })
        
    },[categoryId])
    return(
        <div>
            <h1>{greeting}</h1>
        <ItemList products ={products}/>
        </div>
    )
}
export default ItemListContainer