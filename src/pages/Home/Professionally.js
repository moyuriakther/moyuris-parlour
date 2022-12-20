import React from "react";
import girl from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
import HappyCustomers from "./HappyCustomers";

const Professionally = () => {
  return (
    <div className="hero min-h-screen lg:min-h-full container mx-auto py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="pl-8">
          <h1 className="text-4xl font-bold">
            Let us handle your <br /> screen{" "}
            <span className="text-primary">Professionally.</span>
          </h1>
          <p className="py-6 text-sm">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <HappyCustomers />
        </div>
        <img
          src={girl}
          alt="banner"
          className="lg:max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Professionally;
