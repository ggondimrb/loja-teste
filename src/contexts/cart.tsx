import { createContext, ReactNode, useState, useContext } from "react";

type CartContextData = {
  cart: number;
  total: number;
  addToCart:(product: Product) => void;
}

type CartContextProviderProps = {
  children: ReactNode;
}

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({children}: CartContextProviderProps) {
  const [cart, setCart] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function addToCart(product: Product) {
    setTotal(total + product.price);
    setCart(cart + 1);
  }


  const store = {
    cart,
    total,
    addToCart
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
  
}

export const useCart = () => {
  return useContext(CartContext);
}