import { createBrowserRouter } from 'react-router-dom';
import {
  Login,
  LandingPage,
  AboutUs,
  OurProduct,
  FoodBeverageProducts,
  ClothingProducts,
  FoodBeverageDetails,
  ClothingDetails,
  Testimonials,
  InputTestimonial,
} from '../pages';

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <Login /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/products', element: <OurProduct /> },
  { path: '/products/food-beverage', element: <FoodBeverageProducts /> },
  { path: '/products/clothes', element: <ClothingProducts /> },
  {
    path: '/products/food-beverage/:id/:name',
    element: <FoodBeverageDetails />,
  },
  { path: '/products/clothes/:id/:name', element: <ClothingDetails /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/testimonials/input', element: <InputTestimonial /> },
]);
