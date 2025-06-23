import "../styles/categories.css";

import { NavLink } from "react-router-dom";

function Categories({ categories }) {
  return (
    <nav className="categories">
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/products/category/all"
      >
        all products
      </NavLink>
      {categories.length ? (
        categories.map((category) => (
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
            key={category}
            to={`/products/category/${category}`}
          >
            {category}
          </NavLink>
        ))
      ) : (
        <p>
          <i>No categories</i>
        </p>
      )}
    </nav>
  );
}

export default Categories;
