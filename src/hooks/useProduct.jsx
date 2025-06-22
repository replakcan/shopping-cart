import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useProduct() {
  const { category } = useParams();
  const [products, setProduct] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products";

    fetch(url, {
      mode: "cors",
    })
      .then((res) => {
        if (res.status >= 400) throw new Error("Error occured");

        return res.json();
      })
      .then((res) => setProduct(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [category]);

  return { products, error, loading };
}

export default useProduct;
