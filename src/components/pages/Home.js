import React from "react";
import "../../App.css";
import CardsList from "../CardsList";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <CardsList />
      <Footer />
    </>
  );
}

export default Home;
