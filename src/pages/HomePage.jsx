import { CategoriesHome } from '../components/CategoriesHome';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Trand } from '../components/Trand';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Trand />
      <CategoriesHome />
      <Footer />
    </>
  );
};
