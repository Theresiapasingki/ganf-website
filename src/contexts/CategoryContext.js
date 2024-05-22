import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories/group');
        const data = response.data.data;
        setCategories(data);
      } catch (error) {
        setIsError(true);
        toast.error('Error fetching categories data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, isLoading, isError }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
