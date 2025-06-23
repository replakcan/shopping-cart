import "../styles/shopping-cart.css";

import { useOutletContext } from "react-router-dom";
import CartItem from "../components/cart-item";

function ShoppingCart() {
  const { cart } = useOutletContext();

  return (
    <div className="shopping-cart">
      <h2>Items in your cart:</h2>
      <hr />
      {cart.length ? (
        cart.map((item) => <CartItem key={item.product.id} cartItem={item} />)
      ) : (
        <p>
          <i>cart is empty</i>
        </p>
      )}
    </div>
  );
}

export default ShoppingCart;
