import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        const data = response.data.data;
        setProducts(data);
      } catch (error) {
        setIsError(true);
        toast.error('Error fetching products data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
