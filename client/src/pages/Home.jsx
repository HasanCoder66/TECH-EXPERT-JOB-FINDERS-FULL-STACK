import React from "react";

// Import Component
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Solution from "../components/Solution";
import Templates from "../components/Templates";
import Section2 from "../components/Section2";
import WorksSection from "../components/WorksSection";
import ChooseUsSection from "../components/ChooseUsSection";
import CounterCard from "../components/CounterCard";
import DownloadSection from "../components/DownloadSection";
import TestimonialSection from "../components/TestimonialSection";
import OurCompanySection from "../components/OurCompanySection";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div className="w-full relative">
      <Banner />
      <Section2 />
      <WorksSection />
      <ChooseUsSection />
      <CounterCard />
      <Templates />
      <DownloadSection />
      <Solution />
      <TestimonialSection />
      <OurCompanySection />
      <BlogSection />
    </div>
  );
};

export default Home;
