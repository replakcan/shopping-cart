import { useOutletContext } from "react-router-dom";
import ProductCard from "./product-card";

function Products() {
  const products = useOutletContext();

  return (
    <div className="products">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
