import { NavigationBar, Footer, Banner, Loading } from '../../components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { variantData } from '../../constants';
import axiosInstance from '../../utils/axiosInstance';
import DOMPurify from 'dompurify';
import { shoppingCart } from '../../assets';

const ProductDetails = () => {
  const { category, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({
    photo: '',
    name: '',
    category: '',
    series: '',
    description: '',
    url: '',
  });
  const [variantImages, setVariantImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');

  const sanitizedDescription = DOMPurify.sanitize(product.description);

  const changeImage = (image) => setCurrentImage(image);
  const previousPage = category ? `/products/${category}` : '/products';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        const data = response.data.data;

        setProduct({
          photo: data.photo,
          name: data.name,
          category: data.category,
          series: data.series || '',
          description: data.description,
          url: data.url,
        });
        setCurrentImage(data.photo);

        const variant = variantData.find(
          (v) => v.name.toLowerCase() === data.name.toLowerCase()
        );

        if (variant) setVariantImages(variant.images);
      } catch (error) {
        toast.error('Error fetching product data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleOrderNow = () => {
    window.location = product.url || 'https://shopee.co.id/ganfcollection';
  };

  return (
    <div>
      <header>
        <NavigationBar />
        <Banner showBackButton previousPage={previousPage} />
      </header>

      <main className="px-20 py-16">
        {isLoading ? (
          <Loading />
        ) : (
          <section className="flex flex-col items-center">
            <div className="product-title">
              <h1 className="text-pink-light text-center text-3xl font-bold">
                {product.series
                  ? `${product.series} - ${product.name}`
                  : product.name}
              </h1>
            </div>

            <div className="product-detail">
              <img
                src={currentImage}
                alt={product.name}
                className="product-image"
              />
              <div className="w-full max-w-[700px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizedDescription,
                  }}
                  className="product-description"
                />
              </div>
            </div>

            {variantImages && variantImages.length > 0 && (
              <div className="flex gap-10 flex-wrap mt-24">
                {variantImages.map((image, index) => (
                  <button
                    className="btn-image"
                    key={index}
                    onClick={() => changeImage(image)}
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="image-variant"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="w-full border-t mt-24 pt-12 pb-4 flex gap-8 flex-col items-center">
              <h2 className="text-2xl font-semibold">
                {category === 'fnb'
                  ? '🌟 Treat Yourself – Order Food or Beverages Today! 🌟'
                  : '🔔 Limited Edition Styles – Grab Yours Now! 🔔'}
              </h2>
              <button
                className="btn--pink-primary flex gap-4 items-center"
                onClick={handleOrderNow}
              >
                <img
                  src={shoppingCart}
                  alt="Icon Shopping Cart"
                  className="w-8"
                />
                Order Now
              </button>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
