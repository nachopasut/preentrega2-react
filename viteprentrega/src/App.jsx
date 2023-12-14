import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer'; 
import ItemCount from './components/ItemCount';
import ItemDetailCointainer from './components/ItemDetailCointainer'
import { CartProvider } from './components/CartContext';
import Card from './components/CartWidget';
import Checkout from './Checkout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Todos Nuestros Productos'} />} />

          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'productos por categoria'} />} />
          <Route path='/item/:itemId' element={<ItemDetailCointainer />} />
          <Route path='/card' element={<Card/> } />
        <Route path='/Checkout' element = {Checkout}/>
          <Route path='*' element={<h1>Not Found</h1>} />
          
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;