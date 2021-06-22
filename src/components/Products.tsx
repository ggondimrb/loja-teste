import { useEffect, useState } from "react";
import { useCart } from "../contexts/cart";
import api from "../services/api";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const {addToCart} = useCart();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products');
      
      if(response) {
        setProducts(response.data);
      }
    }

    loadProducts();
  },[])



  return (
    <div>
      {products.map(product => {
        return (
        <div style={{'paddingBottom': 20}}>
        <img src={product.image} alt="produto" width="200" height="200"/><br />
        <strong>Nome: {product.name} </strong> <br />      
        <strong>Preço: {product.price} </strong> <br />      
        <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
        )
      })}
    </div>
  )

}

export default Products;