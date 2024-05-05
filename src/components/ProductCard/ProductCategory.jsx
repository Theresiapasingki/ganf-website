import { Link } from 'react-router-dom';

const ProductCategory = (props) => {
  return (
    <div className="category-card">
      <Link to={props.product.link}>
        <img
          src={props.product.src}
          alt={props.product.name}
          className="card-image"
        />
        <div className="card-title">
          <p className="card-text">{props.product.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategory;
