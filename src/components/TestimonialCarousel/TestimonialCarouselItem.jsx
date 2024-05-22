import { backgroundReview, starFill, starEmpty } from '../../assets';

const TestimonialCarouselItem = ({ testimonial }) => {
  const formattedDate = new Date(testimonial.createdAt).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }
  );

  return (
    <div className="carousel-card-item">
      <div className="relative">
        <img src={backgroundReview} alt="Product Review" />
        <div className="carousel-card-body">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < testimonial.rating ? starFill : starEmpty}
                alt="Star"
                className="w-5"
              />
            ))}
            <p className="font-bold ml-2">{testimonial.rating}/5</p>
          </div>
          <p className="font-medium text-center">{testimonial.review}</p>
          <div className="text-center text-sm">
            <p>{testimonial.customerName}</p>
            <p className="italic mt-1">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarouselItem;
