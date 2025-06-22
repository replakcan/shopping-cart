import { useOutletContext } from "react-router-dom";
import ProductCard from "./product-card";

function Products() {
  const { products, cart, setCart } = useOutletContext();

  return (
    <div className="products">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))
      ) : (
        <p>
          <i>No products</i>
        </p>
      )}
    </div>
  );
}

export default Products;
