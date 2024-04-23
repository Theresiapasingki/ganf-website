import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="flex flex-col gap-16 bg-[#3C6CA8] gap-48 h-21 text-white items-center justify-center ">
      <div className="flex flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="" className="w-60" />
          <p className="font-bold">HAPPINESS #1</p>
        </div>
        <div className="flex flex-col">
          <p>Our Product</p>
          <p>Food n Baverage</p>
          <p>Clothes</p>
        </div>
        <div className="flex flex-col">
          <p>Our Product</p>
          <p>Food n Baverage</p>
          <p>Clothes</p>
        </div>
        <div className="flex flex-col">
          <p>Our Product</p>
          <p>Food n Baverage</p>
          <p>Clothes</p>
        </div>
      </div>
      <div className="h-0 border-solid border-white-100"></div>
    </div>
  );
};

export default Footer;
