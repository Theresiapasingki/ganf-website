import { productCategories } from '../../constants';
import { arrowDown } from '../../assets';
import { useState } from 'react';

const DropdownProduct = () => {
  const [product, setProduct] = useState('Which Product?');

  const handleSelectProduct = () => {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('hidden');

    const dropdownArrow = document.querySelector('.dropdown-arrow');
    dropdownArrow.classList.toggle('rotate-180');
  };

  const handleSelectProductItem = (product) => {
    setProduct(product);
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
        {productCategories.map((category) => (
          <div key={category.id}>
            <div className="menu-title">{category.name}</div>
            {category.products.map((product) => (
              <button
                key={product.id}
                className="menu-item"
                onClick={() => handleSelectProductItem(product.name)}
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
