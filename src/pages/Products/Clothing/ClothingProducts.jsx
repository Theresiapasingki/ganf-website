import { Navbar, Footer, ClothingCard, Banner } from '../../../components';
import { clothingProducts } from '../../../constants';

const ClothingProducts = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner showBackButton previousPage="/products" />
      </header>

      <main>
        <section className="flex flex-col items-center px-20 py-16">
          <div className="product-title">
            <h1 className="text-pink-light text-center text-3xl font-bold">
              Clothes
            </h1>
          </div>
          <h2 className="my-10 text-blue-dark text-3xl font-bold">
            ~ White Series ~
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mb-3">
            {clothingProducts.map((product, index) => (
              <ClothingCard key={index} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClothingProducts;
