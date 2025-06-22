import { useNavigate } from "react-router-dom";

function Categories({ categories }) {
  const navigate = useNavigate();

  function handleClick(category) {
    navigate(`/products/category/${category}`);
  }

  return (
    <nav className="categories">
      <button type="button" onClick={() => navigate("/products")}>
        all products
      </button>
      {categories.length ? (
        categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
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
