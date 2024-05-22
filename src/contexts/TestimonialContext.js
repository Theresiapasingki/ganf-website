import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';

const TestimonialContext = createContext();

const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axiosInstance.get('/testimonials');
        const data = response.data.data;
        setTestimonials(data);
      } catch (error) {
        setIsError(true);
        toast.error('Error fetching products data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <TestimonialContext.Provider value={{ testimonials, isLoading, isError }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export { TestimonialContext, TestimonialProvider };
