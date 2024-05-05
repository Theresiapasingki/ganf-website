import {
  Navbar,
  NewProduct,
  Footer,
  Hero,
  TestimonialCarousel,
} from '../../components';
import { newProductImages } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { specialDecember, specialOctober } from '../../assets';

const Home = () => {
  let navigate = useNavigate();
  const goToTestimonials = () => navigate('/testimonials');

  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main className="p-20">
        <section>
          <h2 className="text-center text-blue-dark text-3xl font-bold mb-9">
            New Products!
          </h2>
          <div className="flex flex-row gap-12 items-center justify-center">
            {newProductImages.map((image, index) => (
              <NewProduct key={index} image={image} />
            ))}
          </div>
        </section>

        <section className="my-28">
          <h2 className="text-center text-blue-dark text-3xl font-bold mb-9">
            Special Offer
          </h2>
          <div className="flex flex-row gap-16 items-center justify-center">
            <img
              src={specialDecember}
              alt="December Promo"
              className="w-[400px]"
            />
            <img
              src={specialOctober}
              alt="October Promo"
              className="w-[400px]"
            />
          </div>
        </section>

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
