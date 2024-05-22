import { Link } from 'react-router-dom';

const ProductCard = ({ category, product }) => {
  const path = `/products/${category}/${product.id}`;

  return (
    <div className="product-card">
      <Link to={path}>
        <img src={product.photo} alt={product.name} className="card-image" />
        <div className="card-title">
          <p className="card-text">{product.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
