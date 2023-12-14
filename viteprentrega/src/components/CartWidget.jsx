import "./CardWidget.css";
import { useContext } from "react";
import { CartContext } from "./CartContext"; 
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            {/* { debería ser la ruta de la imagen } */}
            {/* <img className="CartImg" src={} alt="cart-widget" /> */}
            {totalQuantity}
        </Link>
    );
};

export default CartWidget; 