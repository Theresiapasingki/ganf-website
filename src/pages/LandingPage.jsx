import { Navbar, NewProduct, Footer } from "../components";
import { newProductImages } from "../constants";
import { special1, special2 } from "../assets";

const LandingPage = () => {
  return (
    <div>
      <main className="flex flex-col">
        <Navbar />
        <div className="flex flex-row items-center gap-4 bg-[#FDC5CC] h-12 justify-center">
          <p>Today's offer!</p>
          <button>See Here</button>
        </div>
        <div className="flex flex-col gap-4 justify-center bg-[#3C6CA8] px-8 h-[620px]">
          <h1 className="text-white text-5xl font-bold">Happiness #1</h1>
          <p className="text-white text-3xl font-bold">
            See more of our products
          </p>
          <button className="w-24 h-14 rounded-lg bg-[#FDC5CC] text-[#922417] font-bold">
            Here
          </button>
        </div>
        <div className="flex flex-col mt-16">
          <h1 className="flex text-[#3C6CA8] items-center justify-center text-3xl font-bold">
            New Products!
          </h1>
          <div className="flex flex-row gap-4 items-center justify-center rounded-xl mt-8 border-solid border-[#FDC5CC]">
            {newProductImages.map((img, index) => (
              <NewProduct key={index} src={img} />
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-8 mb-16">
          <h1 className="flex text-[#3C6CA8] items-center justify-center text-3xl font-bold">
            Special Offer
          </h1>
          <div className="flex flex-row gap-8 items-center justify-center">
            <img src={special1} alt="" className="w-[520px] h-[690px]"/>
            <img src={special2} alt="" />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
