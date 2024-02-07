import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import BrowseByCategoryCards from "../components/CategoryCards";
import Pagination from "../components/Pagination";
import PopularVenue from "../components/PopularVenue";
import SalesBanner from "../components/SalesBanner";
import FeaturedVideos from "../components/FeaturedVideos";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <BrowseByCategoryCards />
      <Pagination />
      <PopularVenue />
      <SalesBanner />
      <FeaturedVideos />
    </>
  );
};

export default Home;
