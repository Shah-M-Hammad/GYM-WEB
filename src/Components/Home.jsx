import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import Offer from "./Offer";
import Testimonials from "./Testimonials";
import Stats from "./Stats";

function Home() {
  return (
    <>
      <Header></Header>
      <Stats></Stats>
      <Offer></Offer>
      <Feature></Feature>
      <Testimonials></Testimonials>
 
    </>
  );
}

export default Home;
