import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { CartProvider } from './contexts/cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Products/>
      </div>
    </CartProvider>
  );
}

export default App;
