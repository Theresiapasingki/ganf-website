import { iconProductCategory } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  let navigate = useNavigate();
  const goToProductPage = () => navigate('/products');

  return (
    <div>
      <div className="py-2 flex flex-row items-center gap-4 bg-pink-light justify-center">
        <p className="font-medium">Today's offer!</p>
        <button className="btn--small">SEE HERE</button>
      </div>
      <div className="hero-banner">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-white text-5xl font-bold">HAPPINESS #1</h1>
          <p className="text-white text-3xl font-bold">
            See more of our <br className="max-lg:hidden" /> products!
          </p>
          <button className="btn--pink-primary mt-4" onClick={goToProductPage}>
            Here
          </button>
        </div>

        <img
          src={iconProductCategory}
          alt="Product Group"
          className="h-auto w-full lg:h[285px] lg:w-[600px] xl:h-[380px] xl:w-[800px] 2xl:h-[427px] 2xl:w-[900px]"
        />
      </div>
    </div>
  );
};

export default Hero;
