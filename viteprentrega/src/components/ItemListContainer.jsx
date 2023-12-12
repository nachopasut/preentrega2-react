import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from './FireBaseConfig'
import ItemList from '../components/ItemList'
import { useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) =>{
    const [products,setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        setLoading (true)
        const collectionRef = categoryId
        ? query (collection (db,'products'), where ('category', '==', categoryId))
        : collection (db,  'products')
        getDocs (collectionRef)
        .then (response => {
            const productsAdapted = response.docs.map (doc => {
                const data = doc.data ()
                return {id:doc.id,...data}
            })
            setProducts (productsAdapted)
        })
        .catch (error => {
            console.log (error)
        })
        .finally (() => {
            setLoading (false)
        } 
        )
    })
}
export default ItemListContainer