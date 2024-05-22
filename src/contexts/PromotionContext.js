import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';

const PromotionContext = createContext();

const PromotionProvider = ({ children }) => {
  const [promotions, setPromotions] = useState([]);
  const [loadingPromo, setLoadingPromo] = useState(true);
  const [errorPromo, setErrorPromo] = useState(false);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await axiosInstance.get('/promotions');
        const data = response.data.data;
        setPromotions(data);
      } catch (error) {
        setErrorPromo(true);
        toast.error('Error fetching promotions data. Please try again.');
      } finally {
        setLoadingPromo(false);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <PromotionContext.Provider value={{ promotions, loadingPromo, errorPromo }}>
      {children}
    </PromotionContext.Provider>
  );
};

export { PromotionContext, PromotionProvider };
