import "../styles/root.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="shopping-cart">Shopping Cart</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
