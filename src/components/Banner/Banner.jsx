import { arrowBack, logo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Banner = ({ previousPage, showBackButton }) => {
  let navigate = useNavigate();
  const goToPreviousPage = () => navigate(previousPage);

  return (
    <div>
      <div className="flex items-center bg-blue-dark px-14">
        {showBackButton && (
          <button onClick={goToPreviousPage} className="flex">
            <img src={arrowBack} alt="Icon Back" className="w-12" />
          </button>
        )}
        <div className="w-full flex justify-center">
          <img src={logo} alt="Logo GANF" className="w-72 my-6" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
