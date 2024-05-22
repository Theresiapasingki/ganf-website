import { useParams } from 'react-router-dom';
import { NavigationBar, Footer, Banner, ProductCard } from '../../components';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';

const ProductList = () => {
  const { category } = useParams();

  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCategoryName = () => {
      switch (category) {
        case 'fnb':
          return 'FnB';
        case 'clothes':
          return 'Clothes';
        default:
          return category;
      }
    };
    setCategoryName(getCategoryName());
  }, [category]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/products?category=${categoryName}`
        );
        setProducts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        toast.error('Error fetching categories data. Please try again.');
      }
    };

    if (categoryName) {
      fetchProducts();
    }
  }, [category, categoryName]);

  const renderProducts = () => {
    if (!products || products.length === 0) {
      return (
        <p className="text-center font-medium mt-10 py-6">
          Our products in this category are currently empty,
          <br />
          but we're committed to offering you the best products soon.
        </p>
      );
    }

    if (categoryName === 'Clothes') {
      return products.map((product, index) => (
        <ProductGroup
          key={index}
          product={product}
          categoryName={categoryName}
        />
      ));
    } else {
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mt-16 mb-3">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              category={category.toLowerCase()}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <header>
        <NavigationBar />
        <Banner showBackButton previousPage="/products" />
      </header>

      <main className="px-20 py-16">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p className="text-center font-medium text-[#EF4444]">
            Oops! We couldn't fetch the product data at the moment.
            <br />
            Please try again later or double-check the URL. Thank you for your
            patience!
          </p>
        ) : (
          <section className="flex flex-col items-center">
            <div className="product-title">
              <h1 className="text-pink-light text-center text-3xl font-bold">
                {categoryName === 'FnB' ? 'Food and Beverage' : categoryName}
              </h1>
            </div>
            {renderProducts()}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

const ProductGroup = ({ product, categoryName }) => (
  <div>
    <h2 className="my-10 text-center text-blue-dark text-3xl font-bold">
      ~ {product.seriesName} ~
    </h2>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mb-3">
      {product.products &&
        product.products.map((data, index) => (
          <ProductCard
            key={index}
            product={data}
            category={categoryName.toLowerCase()}
          />
        ))}
    </div>
  </div>
);

export default ProductList;
