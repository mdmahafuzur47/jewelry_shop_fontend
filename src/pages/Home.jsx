import React from "react";
import HeroSection from "../components/Home/HeroSection";
import SubOffers from "../components/Home/SubOffers/SubOffers";
import suboffer1 from "../assets/subOffers/subOffers1.webp"
import suboffer2 from "../assets/subOffers/subOffers2.webp"
import suboffer3 from "../assets/subOffers/subOffers3.webp"
import TitalSecition from "../components/Home/TitalSecition";
import "./home.css"
import DaliverySection from "../components/Home/DaliverySection";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <>
      {/* hero section  */}
      <HeroSection/>
      {/* offers  */}
      <section className="flex max-w-[1400px] mx-auto gap-10">
        <SubOffers img={suboffer1}/>
        <SubOffers img={suboffer2}/>
        <SubOffers img={suboffer3}/>
      </section>
      {/* FeatureSection  */}
      <section className="mycontainer py-20 my-10 home-feature-img">
      <TitalSecition />
      </section>
      {/* deleverySection  */}
      <DaliverySection />
      {/* footer section  */}
      <Footer />
    </>
  );
};

export default Home;
