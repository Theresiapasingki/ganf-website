import { Link } from 'react-router-dom';

const NewProduct = ({ product }) => {
  const category =
    product.category === 'Food' || product.category === 'Drink'
      ? 'fnb'
      : product.category.toLowerCase();

  const path = `/products/${category}/${product.id}`;

  return (
    <div className="new-product-card">
      <Link to={path}>
        <img src={product.photo} alt="New Product" className="card-image" />
        <p className="card-text">
          {product.series && `${product.series} - `}
          {product.name}
        </p>
      </Link>
    </div>
  );
};

export default NewProduct;
