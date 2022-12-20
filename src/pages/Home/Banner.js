import React from "react";
import banner from "../../assets/images/women.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen lg:min-h-full container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          alt="banner"
          className="lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-primary">Get an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
