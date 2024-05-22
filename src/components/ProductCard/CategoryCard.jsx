import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const path = `/products/${category.slug}`;

  return (
    <div className="category-card">
      <Link to={path}>
        <img src={category.photo} alt={category.type} className="card-image" />
        <div className="card-title">
          <p className="card-text">{category.type}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
