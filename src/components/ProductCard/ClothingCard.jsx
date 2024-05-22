import { Link } from 'react-router-dom';

const ClothingCard = ({ product }) => {
  var name = product.name.toLowerCase().replace(/ /g, '-');
  var path = `/products/clothes/${product.id}/${name}`;

  return (
    <div className="product-card">
      <Link to={path}>
        <img src={product.src} alt={product.name} className="card-image" />
        <div className="card-title">
          <p className="card-text">{product.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ClothingCard;
