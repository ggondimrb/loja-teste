import { useCart } from "../contexts/cart";


function Header() {
  const {cart, total} = useCart();

  return (
    <>
      <h1>Carrinho</h1>
      <h2>Quantidade: {cart}</h2>
      <h2>Valor Total: {total}</h2>
      <br/>
    </>
  )
}

export default Header;