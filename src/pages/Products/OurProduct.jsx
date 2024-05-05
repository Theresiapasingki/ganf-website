import { Navbar, Footer, Banner, ProductCategory } from '../../components';
import { productCategories } from '../../constants';

const OurProduct = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main className="p-20">
        <section className="flex justify-center gap-12 flex-wrap">
          {productCategories.map((product, index) => (
            <ProductCategory key={index} product={product} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurProduct;
