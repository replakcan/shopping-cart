import { useState } from "react";
import "../styles/root.css";
import { NavLink, Outlet } from "react-router-dom";

function Root() {
  const [cart, setCart] = useState([]);

  return (
    <section className="root-page">
      <nav>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to="home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to="products"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to="shopping-cart"
        >
          Shopping Cart
        </NavLink>
      </nav>
      <Outlet context={{ cart, setCart }} />
    </section>
  );
}

export default Root;
