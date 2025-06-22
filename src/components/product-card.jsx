function ProductCard({ product }) {
  const { description, image, price, rating, title } = product;

  let croppedDescription = description.split("");

  if (croppedDescription.length > 100) {
    croppedDescription = croppedDescription.slice(0, 99).join("") + "...";
  }

  return (
    <div className="product-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p className="product-description" title={description}>
        {croppedDescription}
      </p>
      <div className="numeric-values">
        <p>price: {price}</p>
        <div className="rating-group">
          <p>rate: {rating.rate}</p>
          <p>count: {rating.count}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
