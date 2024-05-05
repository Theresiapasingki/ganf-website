import TestimonialCarouselItem from './TestimonialCarouselItem';
import { testimonials } from '../../constants';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TestimonialCarousel = () => {
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

export default TestimonialCarousel;
