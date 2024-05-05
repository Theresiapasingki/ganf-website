import { useState } from 'react';
import { Navbar, Banner, Footer, DropdownProduct } from '../../components';
import { starBlueEmpty, starBlueFill } from '../../assets';

const InputTestimonial = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (index) => setRating(index + 1);

  return (
    <div>
      <header>
        <Navbar />
        <Banner showBackButton previousPage="/testimonials" />
      </header>

      <main className="px-24 py-20">
        <section className=" mx-auto xl:w-11/12">
          <form
            action="/testimonials"
            className="flex flex-col items-center gap-y-10"
          >
            <DropdownProduct />

            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <button
                  key={index}
                  className="btn-rating w-14"
                  onClick={() => handleRating(index)}
                  type="button"
                >
                  <img
                    alt="Star"
                    src={index < rating ? starBlueFill : starBlueEmpty}
                  />
                </button>
              ))}
            </div>

            <textarea
              className="textarea-field mt-3"
              placeholder="Share your thought here..."
            ></textarea>

            <div className="flex justify-end xl:w-10/12">
              <button className="btn--pink-primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InputTestimonial;
