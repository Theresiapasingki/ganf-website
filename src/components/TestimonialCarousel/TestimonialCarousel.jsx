import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loading from '../Loading/Loading';
import TestimonialCarouselItem from './TestimonialCarouselItem';
import { useContext } from 'react';
import { TestimonialContext } from '../../contexts/TestimonialContext';

const TestimonialCarousel = () => {
  const { testimonials, isLoading, isError } = useContext(TestimonialContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 769 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 769, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const renderTestimonials = () => {
    if (!testimonials || testimonials.length === 0) {
      return (
        <p className="text-center font-medium py-9">
          Our testimonials section is currently empty,
          <br />
          but we're working hard to gather feedback from our customers soon!
        </p>
      );
    }

    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        containerClass="carousel"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCarouselItem key={index} testimonial={testimonial} />
        ))}
      </Carousel>
    );
  };

  return (
    <div>
      {isError ? (
        <p className="text-center font-medium text-[#EF4444] py-9">
          Apologies! We're having trouble loading the data right now.
          <br />
          Please try again later. Thank you for your understanding!
        </p>
      ) : isLoading ? (
        <div className="py-9">
          <Loading />
        </div>
      ) : (
        renderTestimonials()
      )}
    </div>
  );
};

export default TestimonialCarousel;
