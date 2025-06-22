import { useState } from "react";
import "../styles/product-card.css";

function ProductCard({ product, setCart }) {
  const { description, image, price, rating, title } = product;
  const [count, setCount] = useState(0);

  let croppedDescription = description.split("");

  if (croppedDescription.length > 100) {
    croppedDescription = croppedDescription.slice(0, 99).join("") + "...";
  }

  function handleChange(e) {
    setCount(Math.max(0, Math.min(10, Number(e.target.value))));
  }

  function handleIncrement() {
    if (count == 10) return;

    setCount(count + 1);
  }

  function handleDecrement() {
    if (count == 0) return;

    setCount(count - 1);
  }

  function handleClick() {
    setCart((prevCart) => {
      const productId = product.id;
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id == productId
      );

      if (existingItemIndex != -1) {
        return prevCart.map((item, index) =>
          index == existingItemIndex ? { ...item, count: count } : item
        );
      } else {
        return [...prevCart, { product, count }];
      }
    });
  }

  return (
    <div className="product-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p className="product-description" title={description}>
        {croppedDescription}
      </p>
      <div className="numeric-values">
        <p>price: {price} ₺</p>
        <div className="rating-group">
          <p>rate: {rating.rate}</p>
          <p>count: {rating.count}</p>
        </div>
      </div>
      <hr />
      <div className="add-to-cart-group">
        <div className="count-group">
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <input type="number" min={0} value={count} onChange={handleChange} />
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button
          id="add-to-cart-btn"
          type="button"
          disabled={count <= 0}
          onClick={handleClick}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
