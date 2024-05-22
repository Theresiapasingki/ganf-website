import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { PromotionContext } from '../../contexts/PromotionContext';
import {
  NavigationBar,
  NewProduct,
  Footer,
  Hero,
  TestimonialCarousel,
  Loading,
} from '../../components';

const Home = () => {
  const navigate = useNavigate();
  const { products, isLoading, isError } = useContext(ProductContext);
  const { promotions, loadingPromo, errorPromo } = useContext(PromotionContext);

  const goToTestimonials = () => navigate('/testimonials');

  const renderSection = (title, isLoading, isError, content, sectionName) => (
    <section className="mb-28" id={sectionName}>
      <h2 className="text-center text-blue-dark text-3xl font-bold mb-9">
        {title}
      </h2>
      <div className="flex flex-row gap-14 items-center justify-center">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p className="text-center font-medium text-[#EF4444]">
            Apologies! We're having trouble loading the data right now.
            <br />
            Please try again later. Thank you for your understanding!
          </p>
        ) : (
          content
        )}
      </div>
    </section>
  );

  const renderNewProducts = () => {
    if (!products || products.length === 0) {
      return (
        <p className="text-center font-medium">
          Our product selection is currently empty,
          <br />
          but we're committed to offering you the best products and services
          soon.
        </p>
      );
    }

    return products
      .slice(0, 4)
      .map((product) => <NewProduct key={product.id} product={product} />);
  };

  const renderPromotions = () => {
    if (!promotions || promotions.length === 0) {
      return (
        <p className="text-center font-medium">
          While we currently have no promotions,
          <br /> we're committed to offering you the best products and services.
        </p>
      );
    }

    return promotions
      .slice(0, 2)
      .map((promotion) => (
        <img
          key={promotion.id}
          src={promotion.photo}
          alt={promotion.name}
          className="w-[400px]"
        />
      ));
  };

  return (
    <div>
      <header>
        <NavigationBar />
        <Hero />
      </header>

      <main className="p-20">
        {renderSection(
          'New Products!',
          isLoading,
          isError,
          renderNewProducts(),
          'products'
        )}
        {renderSection(
          'Special Offer',
          loadingPromo,
          errorPromo,
          renderPromotions(),
          'promotions'
        )}

        <section className="text-center">
          <h2 className="text-blue-dark text-3xl font-bold 2xl:mb-2">
            What they said <br />
            about our products
          </h2>
          <TestimonialCarousel />
          <button
            className="btn--pink-primary 2xl:mt-6"
            onClick={goToTestimonials}
          >
            See more {'>>'}
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
