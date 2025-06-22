import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/product-card";
import CartItem from "../components/cart-item";

function ShoppingCart() {
  const { cart } = useOutletContext();

  console.log(Object.values(cart));
  return (
    <div>
      <h2>Items in your cart:</h2>
      <hr />
      {cart.length ? (
        cart.map((item) => <CartItem key={item.product.id} cartItem={item} />)
      ) : (
        <div>cart is empty</div>
      )}
    </div>
  );
}

export default ShoppingCart;
