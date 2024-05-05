import { Link } from 'react-router-dom';

const NewProduct = (props) => {
  // Changing product name to lowercase and replacing space with dash
  var name = props.image.name.toLowerCase().replace(/ /g, '-');
  // Path for each product containing id and name
  var path = `/products/clothes/${props.image.id}/${name}`;

  return (
    <div className="new-product-card">
      <Link to={path}>
        <img src={props.image.src} alt="New Product" className="card-image" />
        <p className="card-text">{props.image.title}</p>
      </Link>
    </div>
  );
};

export default NewProduct;
