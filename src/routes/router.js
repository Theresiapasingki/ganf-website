import {
  Home,
  AboutUs,
  OurProduct,
  Testimonials,
  InputTestimonial,
  ProductList,
  ProductDetails,
} from '../pages';

export const router = [
  { path: '/', element: <Home /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/products', element: <OurProduct /> },
  { path: '/products/:category', element: <ProductList /> },
  { path: '/products/:category/:id', element: <ProductDetails /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/testimonials/input', element: <InputTestimonial /> },
];
