import React, { useContext, useState } from "react";
import { db, Timestamp, doc, collection, writeBatch, getDoc, addDoc } from "./components/FireBaseConfig";
import CheckoutForm from "./CheckoutForm";
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
      const stockUpdates = {};

      for (const prod of cart) {
        const docRef = doc(db, 'products', prod.id);
        const productDoc = await getDoc(docRef);

        if (productDoc.exists()) {
          const stockDb = productDoc.data().stock;
          const productQuantity = prod.quantity;

          if (stockDb >= productQuantity) {
            stockUpdates[prod.id] = stockDb - productQuantity;
            batch.update(docRef, { stock: stockDb - productQuantity });
          } else {
            outOfStock.push({ id: prod.id, ...productDoc.data() });
          }
        }
      }

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
      console.error(error);
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
