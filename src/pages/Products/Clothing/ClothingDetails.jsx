import { Navbar, Footer, Banner } from '../../../components';
import { clothingProducts } from '../../../constants';
import { useParams } from 'react-router-dom';

const ClothingDetails = () => {
  let { id } = useParams();

  const product = clothingProducts.find(
    (product) => product.id === parseInt(id)
  );

  let srcImage = product.src;

  const changeImage = (image) => {
    srcImage = image;
    document.getElementById('productImage').src = srcImage;
  };

  return (
    <div>
      <header>
        <Navbar />
        <Banner showBackButton previousPage="/products/clothes" />
      </header>

      <main>
        <section className="flex flex-col items-center px-20 pt-16 pb-40">
          <div className="product-title">
            <h1 className="text-pink-light text-center text-3xl font-bold">
              {product.series} - {product.name}
            </h1>
          </div>

          <div className="flex gap-x-20 gap-y-10 mt-16 w-full max-w-[900px] flex-col md:flex-row">
            <img
              id="productImage"
              src={srcImage}
              alt={product.name}
              className="rounded-xl border-[6px] border-pink-light w-72 h-96 object-cover"
            />
            <div className="w-full max-w-[700px]">
              <div className="flex flex-col gap-6">
                <p className="text-blue-dark font-semibold text-justify text-xl">
                  Size Chart
                </p>

                {product.sizeChart.map((size, index) => (
                  <div key={index}>
                    <p className="text-blue-dark font-semibold text-justify text-xl">
                      -{size.size}-
                    </p>
                    <p className="text-blue-dark font-semibold text-justify text-xl">
                      Lingkar Dada {size.bust}
                    </p>
                    <p className="text-blue-dark font-semibold text-justify text-xl">
                      Panjang Lengan {size.arm}
                    </p>
                    <p className="text-blue-dark font-semibold text-justify text-xl">
                      Panjang Baju {size.shirt_length}
                    </p>
                    <p className="text-blue-dark font-semibold text-justify text-xl">
                      Panjang Lengan {size.sleeve_length}
                    </p>
                  </div>
                ))}

                <p className="text-blue-dark font-semibold text-justify text-xl">
                  ({product.notes})
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-wrap mt-24">
            {product.images.map((image, index) => (
              <button
                className="btn-image"
                key={index}
                onClick={() => changeImage(image)}
              >
                <img
                  src={image}
                  alt={product.name}
                  className="w-48 h-48 object-cover hover:border-pink-light hover:border-2"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClothingDetails;
