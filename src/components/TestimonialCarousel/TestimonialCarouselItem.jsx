import { backgroundReview, starFill, starEmpty } from '../../assets';

const TestimonialCarouselItem = (props) => {
  return (
    <div className="carousel-card-item">
      <div className="relative">
        <img src={backgroundReview} alt="Product Review" />
        <div className="carousel-card-body">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < props.testimonial.rating ? starFill : starEmpty}
                alt="Star"
                className="w-5"
              />
            ))}
            <p className="font-bold ml-2">{props.testimonial.rating}/5</p>
          </div>
          <p className="font-medium text-center">
            {props.testimonial.description}
          </p>
          <div className="text-center text-sm">
            <p>{props.testimonial.reviewer}</p>
            <p className="italic mt-1">{props.testimonial.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarouselItem;
