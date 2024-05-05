import { Link } from 'react-router-dom';

const ClothingCard = (props) => {
  var name = props.product.name.toLowerCase().replace(/ /g, '-');
  var path = `/products/clothes/${props.product.id}/${name}`;

  return (
    <div className="product-card">
      <Link to={path} preventScrollReset={true}>
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

export default ClothingCard;
