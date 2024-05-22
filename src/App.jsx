import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { router } from './routes';
import { ProductProvider } from './contexts/ProductContext';
import { PromotionProvider } from './contexts/PromotionContext';
import { TestimonialProvider } from './contexts/TestimonialContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ProductProvider>
      <PromotionProvider>
        <TestimonialProvider>
          <CategoryProvider>
            <Router>
              <Routes>
                {router.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Router>
            <ToastContainer />
          </CategoryProvider>
        </TestimonialProvider>
      </PromotionProvider>
    </ProductProvider>
  );
}

export default App;
