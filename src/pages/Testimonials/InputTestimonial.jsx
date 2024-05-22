import { useState } from 'react';
import {
  NavigationBar,
  Banner,
  Footer,
  DropdownProduct,
} from '../../components';
import { starBlueEmpty, starBlueFill, loadingWhite } from '../../assets';
import { toast } from 'react-toastify';
import axiosInstance from '../../utils/axiosInstance';

const InputTestimonial = () => {
  const [rating, setRating] = useState(0);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [formState, setFormState] = useState({
    productId: '',
    rating: 0,
    customerName: '',
    review: '',
  });

  const handleRating = (index) => {
    setRating(index + 1);
    setFormState({ ...formState, rating: index + 1 });
  };

  const handleProductChange = (selectedProduct) => {
    setFormState({ ...formState, productId: selectedProduct.id });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingSubmit(true);

    const isCustomerNameEmpty = formState.customerName.trim() === '';
    const isReviewEmpty = formState.review.trim() === '';
    const isNameAndReviewEmpty = isCustomerNameEmpty || isReviewEmpty;

    if (!formState.productId || !formState.rating || isNameAndReviewEmpty) {
      setIsLoadingSubmit(false);
      return toast.error('Please fill in all fields.');
    }

    try {
      await axiosInstance.post('/testimonials', formState);
      setIsLoadingSubmit(false);

      toast.success('Testimonial added successfully. Thank you!');
      window.location = '/testimonials';
    } catch (error) {
      setIsLoadingSubmit(false);
      toast.error('Error adding promotion. Please try again.');
    }
  };

  return (
    <div>
      <header>
        <NavigationBar />
        <Banner showBackButton previousPage="/testimonials" />
      </header>

      <main className="px-24 py-20">
        <section className="mx-auto xl:w-11/12">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center gap-y-10"
          >
            <DropdownProduct onProductChange={handleProductChange} />

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

            <input
              id="customer-name"
              type="text"
              value={formState.customerName}
              onChange={(e) =>
                setFormState({ ...formState, customerName: e.target.value })
              }
              className="input-name-field mt-3"
              placeholder="Your Name"
            />

            <textarea
              id="review"
              value={formState.review}
              className="textarea-field"
              onChange={(e) =>
                setFormState({ ...formState, review: e.target.value })
              }
              placeholder="Share your thought here..."
            ></textarea>

            <div className="flex justify-end w-full xl:w-10/12">
              <button className="flex items-center btn--pink-primary" type="submit">
                Send
                {isLoadingSubmit && (
                  <img
                    src={loadingWhite}
                    alt="Loading Icon"
                    className="animate-spin w-6 h-6 ml-2"
                  />
                )}
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
