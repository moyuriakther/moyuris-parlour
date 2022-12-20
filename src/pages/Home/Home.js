import React from "react";
import Banner from "./Banner";
import HandleProject from "./HandleProject";
import Professionally from "./Professionally";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Professionally />
      <HandleProject />
    </div>
  );
};

export default Home;
