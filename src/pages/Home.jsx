import Cover from "../layouts/cover";
import FurnitureHeroSection from "../layouts/heroSection";
import HomeSection from "../layouts/HomeSection";
import SliderSection from "../layouts/SliderSection";
import ProductGridSection from "../layouts/ProductGridSection"; // <-- import
import TestimonialSection from "../layouts/TestimonialSection";
import Footer from "../layouts/Footer";
import DiscountBanner from "../layouts/DiscountBanner";

const Home = () => {
  return (
    <>
      <Cover />
      <HomeSection />
      <SliderSection />
      <FurnitureHeroSection />
      <ProductGridSection />
      <TestimonialSection />
      <DiscountBanner />
      <Footer  />
    </>
  );
};

export default Home;
