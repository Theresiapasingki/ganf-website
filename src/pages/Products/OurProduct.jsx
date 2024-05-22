import { useContext } from 'react';
import { NavigationBar, Footer, Banner, CategoryCard } from '../../components';
import Loading from '../../components/Loading/Loading';
import { CategoryContext } from '../../contexts/CategoryContext';

const OurProduct = () => {
  const { categories, isLoading, isError } = useContext(CategoryContext);

  const renderCategories = () => {
    if (!categories || categories.length === 0) {
      return (
        <p className="text-center font-medium">
          Our product categories are currently empty,
          <br />
          but we're working hard to bring you a diverse selection soon!
        </p>
      );
    }

    return (
      <section className="flex justify-center gap-12 flex-wrap">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </section>
    );
  };

  return (
    <div>
      <header>
        <NavigationBar />
        <Banner />
      </header>

      <main className="p-20">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p className="text-center font-medium text-[#EF4444]">
            Apologies! We're having trouble loading the categories right now.
            <br />
            Please try again later. Thank you for your understanding!
          </p>
        ) : (
          renderCategories()
        )}
      </main>

      <Footer />
    </div>
  );
};

export default OurProduct;
