import { loading } from '../../assets';

const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={loading}
        alt="Loading"
        className="animate-spin w-10 h-10 mb-2"
      />
      <p className="font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
