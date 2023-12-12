import "./ItemDetailContainer.css"
import { useState, useEffect } from "react" 
import {getDoc,dbc} from "firebase/firestore"
import {db} from "./FireBaseConfig"
import ItemDetail from "./ItemDetail"
import { Form, useParams } from "react-router-dom"
 
const ItemDetailCointainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()
useEffect(() => {
    setLoading(true)
    const docRef = doc (db, 'products', itemId)
    getDoc (docRef)
    .then (response =>{
        const data = response.data ()
        const productsAdapted = {id : response.id,...data}
        setProduct(productsAdapted)
    })
    .catch (error =>{
        console.log (error)
    })
    .finally (() => {
        setLoading(false)
    }
    )
})
}
 export default ItemDetailCointainer

