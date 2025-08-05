import React from "react";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import HowItWorks from "../components/home/HowItWorks";
import FeaturedProviders from "../components/home/FeaturedProviders";
import SearchSection from "../components/home/SearchSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ProviderCTA from "../components/home/ProviderCTA";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SearchSection />
       <main className="w-full flex flex-col max-w-7xl gap-10 items-center">
        <Categories />
        <HowItWorks />
        <FeaturedProviders />
        <WhyChooseUs />
        <Testimonials />
        <ProviderCTA />
      </main>
    </div>
  );
};

export default Home;
