import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./FireBaseConfig";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then((response) => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} /> : <p>Product not found</p>}
        </div>
    );
};

export default ItemDetailContainer;
