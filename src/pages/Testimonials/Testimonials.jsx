import { Navbar, Footer, Banner, TestimonialCard } from '../../components';
import { Link } from 'react-router-dom';
import { testimonials } from '../../constants';

const Testimonials = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main className="px-24 py-20">
        <section className="flex flex-col items-center mx-auto xl:w-11/12">
          <Link className="btn-testimonial mb-14" to="/testimonials/input">
            <p>Share your thought here...</p>
          </Link>

          <div className="flex flex-col gap-y-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
