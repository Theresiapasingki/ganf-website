import { starFill, starEmpty } from '../../assets';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="card-image">
        <img src={testimonial.product.photo} alt="Review Product" />
      </div>
      <div className="card-content">
        <div className="content-title">
          <p className="text-blue-dark text-3xl font-bold">
            {testimonial.product.name}
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < testimonial.rating ? starFill : starEmpty}
                alt="Star"
                className="object-cover"
              />
            ))}
          </div>
        </div>
        <p className="content-description">{testimonial.review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
