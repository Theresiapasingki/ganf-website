import { Navbar, Footer, Banner } from '../../components';
import { logoEllipse, femaleIcon, maleIcon } from '../../assets';

const AboutUs = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main className="px-24">
        <section className="mt-20 flex justify-between gap-10">
          <div className="max-w-[640px]">
            <h1 className="text-blue-dark text-[52px] font-bold mb-6">
              About GANF
            </h1>
            <p className="font-semibold text-justify text-lg mb-4">
              GANF merupakan Usaha Mikro Kecil Menengah yang baru didirikan pada
              tahun 2023. GANF merupakan UMKM yang bergerak di bidang Food n
              Beverage dan Fashion. GANF sendiri memiliki arti yang dimana
              merupakan singkatan dari kedua nama panggilan owner.
            </p>
            <p className="font-semibold text-justify text-lg">
              Berawal dari dua orang yang sangat membutuhkan penghasilan dan
              sulitnya mendapatkan lapangan pekerjaan, maka terpikirlah untuk
              membuat bisnis sendiri yaitu GANF yang dimana dengan harapan dari
              usaha kecil-kecilan hingga dapat menjadi bisnis yang besar.
            </p>
          </div>
          <img
            src={logoEllipse}
            alt="Logo Ellipse GANF"
            className="w-80 h-80 mr-10"
          />
        </section>

        <hr className="border-[#b2b2b2a1] border my-20" />

        <section className="flex flex-col items-center">
          <h2 className="text-[42px] font-bold mb-10 text-[#000000C9]">
            Owner GANF
          </h2>
          <div className="flex gap-x-36">
            <div className="text-center">
              <img src={maleIcon} alt="Owner GANF 1" className="w-44" />
              <p className="text-2xl mt-7">Owner 1</p>
            </div>
            <div className="text-center">
              <img src={femaleIcon} alt="Owner GANF 2" className="w-44" />
              <p className="text-2xl mt-7">Owner 2</p>
            </div>
          </div>
        </section>

        <hr className="border-[#b2b2b2a1] border my-20" />

        <section className="flex flex-col items-center">
          <h2 className="text-[42px] font-bold mb-6 text-[#000000C9]">
            Vision and Mission GANF
          </h2>
          <p className="text-center font-semibold text-2xl w-[640px]">
            Usaha ini didirikan untuk sukses dan bisa membawa kebahagiaan untuk
            semua masyarakat Bima Sakti. Menjadi usaha terkemuka di berbagai
            sektor makanan, minuman, fashion dan agrikultur.
          </p>
        </section>

        <hr className="border-[#b2b2b2a1] border my-20" />

        <section className="flex flex-col items-center mb-20">
          <h2 className="text-[42px] font-bold mb-6 text-[#000000C9]">
            Tagline GANF
          </h2>
          <p className="font-handwritten text-3xl">HAPPINESS #1</p>
          <p className="text-center font-semibold text-2xl mt-5">
            HAPPINESS #1 (Happiness Number One)
            <br />
            sebab kebahagiaan itu yang utama
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
