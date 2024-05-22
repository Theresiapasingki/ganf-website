import { arrowDown } from '../../assets';
import { useContext, useState } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';

const DropdownProduct = ({ onProductChange }) => {
  const [product, setProduct] = useState('Which Product?');
  const { categories } = useContext(CategoryContext);

  const handleSelectProduct = () => {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('hidden');

    const dropdownArrow = document.querySelector('.dropdown-arrow');
    dropdownArrow.classList.toggle('rotate-180');
  };

  const handleSelectProductItem = (product) => {
    setProduct(product.name);
    onProductChange(product);

    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.add('hidden');
  };

  return (
    <div className="relative w-full max-w-[900px]">
      <button
        className="btn-testimonial--select"
        onClick={handleSelectProduct}
        type="button"
      >
        <p>{product}</p>
        <img
          src={arrowDown}
          alt="Arrow Dropdown"
          className="dropdown-arrow w-12"
        />
      </button>

      <div className="dropdown-menu hidden">
        {categories.map((category) => (
          <div key={category.slug}>
            <div className="menu-title">{category.type}</div>
            {category.products.map((product) => (
              <button
                key={product.id}
                className="menu-item"
                onClick={() => handleSelectProductItem(product)}
                type="button"
              >
                {product.name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownProduct;
