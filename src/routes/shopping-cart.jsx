import { useOutletContext } from "react-router-dom";
function ShoppingCart() {
  const { cart } = useOutletContext();
}

export default ShoppingCart;
