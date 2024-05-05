import { Navbar, Footer, Banner } from '../../../components';
import { foodBeverageProducts } from '../../../constants';
import { useParams } from 'react-router-dom';

const FoodBeverageDetails = () => {
  let { id } = useParams();

  const product = foodBeverageProducts.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <div>
      <header>
        <Navbar />
        <Banner showBackButton previousPage="/products/food-beverage" />
      </header>

      <main>
        <section className="flex flex-col items-center px-20 pt-16 pb-40">
          <div className="product-title">
            <h1 className="text-pink-light text-center text-3xl font-bold">
              {product.name}
            </h1>
          </div>

          <div className="flex gap-x-20 gap-y-10 mt-16 flex-wrap">
            <img
              src={product.src}
              alt={product.name}
              className="rounded-xl border-[6px] border-pink-light w-80 h-96 object-cover"
            />
            <div className="w-full max-w-[700px]">
              <div>
                <p className="text-blue-dark font-semibold text-justify text-xl">
                  {product.description}
                </p>
                <p className="mt-2 text-blue-dark font-semibold text-justify text-xl">
                  {product.otherDescription}
                </p>
              </div>

              <div className="my-6">
                <p className="text-blue-dark font-semibold text-justify text-xl">
                  Bahan-bahan utama yang digunakan :
                </p>
                <ol className="ml-7">
                  {product.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="list-decimal text-blue-dark font-semibold text-justify text-xl"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ol>
              </div>

              {product.variantSizes.length >= 1 && (
                <div>
                  <p className="text-blue-dark font-semibold text-justify text-xl">
                    Tersedia dengan {product.variantSizes.length} ukuran yaitu :
                  </p>
                  <ul className="ml-7">
                    {product.variantSizes.map((ingredient, index) => (
                      <li
                        key={index}
                        className="list-decimal text-blue-dark font-semibold text-justify text-xl"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoodBeverageDetails;
