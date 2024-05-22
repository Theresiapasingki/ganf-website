import {
  NavigationBar,
  Footer,
  Banner,
  TestimonialCard,
  Loading,
} from '../../components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TestimonialContext } from '../../contexts/TestimonialContext';

const Testimonials = () => {
  const { testimonials, isLoading, isError } = useContext(TestimonialContext);

  const renderTestimonials = () => {
    if (!testimonials || testimonials.length === 0) {
      return (
        <p className="text-center font-medium py-6">
          Our testimonials is currently empty,
          <br />
          but we're working hard to gather feedback from our customers soon!
        </p>
      );
    }

    return testimonials.map((testimonial) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    ));
  };

  return (
    <div>
      <header>
        <NavigationBar />
        <Banner />
      </header>

      <main className="px-24 py-20">
        <section className="flex flex-col items-center mx-auto xl:w-11/12">
          <Link className="btn-testimonial mb-14" to="/testimonials/input">
            <p>Share your thought here...</p>
          </Link>

          <div className="flex flex-col gap-y-4">
            {isError ? (
              <p className="text-center font-medium text-[#EF4444] py-6">
                Apologies! We're having trouble loading the testimonials right
                now.
                <br />
                Please try again later. Thank you for your understanding!
              </p>
            ) : isLoading ? (
              <Loading />
            ) : (
              renderTestimonials()
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
