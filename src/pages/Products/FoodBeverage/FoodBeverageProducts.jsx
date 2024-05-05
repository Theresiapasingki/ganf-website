import { Navbar, Footer, FoodBeverageCard, Banner } from '../../../components';
import { foodBeverageProducts } from '../../../constants';

const FoodBeverageProducts = () => {
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
              Food n Beverage
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mt-16 mb-3">
            {foodBeverageProducts.map((product, index) => (
              <FoodBeverageCard key={index} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoodBeverageProducts;
