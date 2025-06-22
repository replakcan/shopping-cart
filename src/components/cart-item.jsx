import '../styles/cart-item.css'

function CartItem({ cartItem }) {
  const { product, count } = cartItem;

  return (
    <div className="cart-item">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.name} />
      <div>Count: {count}</div>
    </div>
  );
}

export default CartItem;
