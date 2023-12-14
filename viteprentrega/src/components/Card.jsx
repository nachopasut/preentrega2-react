import './Card.css'
import { useContext } from 'react'
import { createContext } from './CartContext'
import   CartItem from './CartItem'
import { Link } from 'react-router-dom'
const Cart = () =>{
    const {cart,clearCart,totalQuantity,total} = useContext (createContext)
    if (totalQuantity === 0) {
        return (
            <div>
                <h1> no ha item en el carrito</h1>
                <Link to ='/' className='Option'>Products</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map(p=> <CartItem key={p.id} {...p}/>)}
            <h3> total: $ {total}</h3>
            <button onClick={() => clearCart ()} className='Button'>limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
        )
}