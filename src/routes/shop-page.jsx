import "../styles/shop-page.css";

import Categories from "../components/categories";
import useProduct from "../hooks/useProduct";
import { Outlet, useLoaderData } from "react-router-dom";

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

  if (error) return <div>Oops, something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <section className="shop-page">
      <Categories categories={categories} />
      <Outlet context={products} />
    </section>
  );
}

export default ShopPage;
