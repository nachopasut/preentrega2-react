import { db, Timestamp, collection, writeBatch, query, where, getDocs, addDoc } from "./components/FireBaseConfig";
import CheckoutForm from "./CheckoutForm";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext"; 
const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(query(productsRef, where('documentalId'))); // Replace 'documentalId' with the correct field name

      const { docs = productsAddedFromFirestore } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const producAddedtoCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = producAddedtoCart?.quantity;

        if (stockDb >= productQuantity) {
          batch.update(doc.ref, { stock: stockDb - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('No hay productos que estén en stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
