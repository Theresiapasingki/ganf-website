import { useContext } from 'react';
import { logo, whatsapp, instagram, shopee, tiktok } from '../../assets';
import { CategoryContext } from '../../contexts/CategoryContext';

const Footer = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <footer className="bg-blue-dark h-fit py-8 px-20">
      <div className="flex justify-between items-center gap-10 xl:gap-40 pt-4">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Logo GANF" className="w-52" />
          <p className="font-bold font-handwritten text-2xl text-white pl-4">
            HAPPINESS #1
          </p>
        </div>
        <div className="grow flex justify-between gap-x-5 pr-5">
          <div className="flex flex-col gap-4">
            <a href="/products" className="menu-item">
              Our Product
            </a>
            {categories.map((category) => (
              <a
                href={`/products/${category.slug}`}
                key={category.slug}
                className="menu-item"
              >
                {category.type}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <a href="/about-us" className="menu-item">
              About Us
            </a>
            <a href="/about-us" className="menu-item">
              About GANF
            </a>
          </div>
          <div>
            <a href="/testimonials" className="menu-item">
              Testimoni
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="menu-item">Information</p>
            <p className="menu-item">
              Jl. Laiya 1 No 5 <br />
              Makassar, <br />
              Sulawesi Selatan
            </p>
          </div>
        </div>
      </div>

      <hr className="border-1 border-white my-8" />

      <div className="text-center">
        <div className="flex justify-center gap-5 mb-6">
          <a
            className="btn-icon pt-1.5"
            href="https://api.whatsapp.com/send/?phone=6281524062994"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp Logo" className="w-9" />
          </a>
          <a
            className="btn-icon pt-1.5"
            href="https://instagram.com/ganf_official"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram Logo" className="w-9" />
          </a>
          <a
            className="btn-icon pt-1"
            href="https://shopee.co.id/ganfcollection"
            target="_blank"
            rel="noreferrer"
          >
            <img src={shopee} alt="Shopee Logo" className="w-9" />
          </a>
          <a
            className="btn-icon pt-1.5"
            href="https://www.tiktok.com/@ganf_official"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktok} alt="Shopee Logo" className="w-9" />
          </a>
        </div>
        <p className="text-sm font-medium text-white">
          © Copyright. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
