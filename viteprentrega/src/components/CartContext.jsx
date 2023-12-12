import { createContext , useState } from "react";
export const createContext = createContext({
    cart:[]
})
export const CartProvider = ({children}) => {
    const [cart,setCart] = useState ([])
    console.log (cart)
    const addItem = (item,quantity) => {
        if (!isIncart(item.id)) {
            setCart (prev => [...prev,{...item,quantity}])
        } else {
            console.error ('El Producto ya fue agregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filtrer (prod => prod.id !== itemId)
        setCart (cartUpdated)
    }
    const clearCart = () => {
        setCart ([])
    }
    const isInCart = (itemId) => {
        return cart.sone (prod => prod.id === itemId)
    }
    return (
        <createContext.provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </createContext.provider>
    )
}