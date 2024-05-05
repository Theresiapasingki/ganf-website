import { starFill, starEmpty } from '../../assets';

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <div className="card-image">
        <img src={props.testimonial.src} alt="Review Product" />
      </div>
      <div className="card-content">
        <div className="content-title">
          <p className="text-blue-dark text-3xl font-bold">
            {props.testimonial.name}
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < props.testimonial.rating ? starFill : starEmpty}
                alt="Star"
              />
            ))}
          </div>
        </div>
        <p className="content-description">{props.testimonial.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
