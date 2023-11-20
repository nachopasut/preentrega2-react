import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer'; 
import ItemCount from './components/ItemCount';
import ItemDetailCointainer from './components/ItemDetailCointainer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailCointainer />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;