import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomeProductCard from "../../components/homeProductCard/HomeProductCard";
import Layout from "../../components/layout/Layout";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
// import { useContext } from "react";
// import MyContext from "../../context/myContext";
// import Loader from "../../components/loader/Loader";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomeProductCard />
      <Track />
      <Testimonial />
      {/* <Loader /> */}
    </Layout>
  );
};

export default Home;
