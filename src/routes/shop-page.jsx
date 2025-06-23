import "../styles/shop-page.css";

import Categories from "../components/categories";
import useProduct from "../hooks/useProduct";
import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products/categories", {
    mode: "cors",
  });

  if (response.status >= 400) throw new Error("Error occured");

  const categories = await response.json();
  return categories;
}

function ShopPage() {
  const categories = useLoaderData();
  const { products, error, loading } = useProduct();
  const { cart, setCart } = useOutletContext();

  if (error)
    return (
      <div className="error-container">
        <i>Oops, something went wrong!</i>
      </div>
    );

  if (loading)
    return (
      <div className="loading-container">
        <i>Loading...</i>
      </div>
    );

  return (
    <section className="shop-page">
      <Categories categories={categories} />
      <Outlet context={{ products, cart, setCart }} />
    </section>
  );
}

export default ShopPage;
