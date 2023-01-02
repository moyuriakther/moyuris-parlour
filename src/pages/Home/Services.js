import React from "react";
import { Link } from "react-router-dom";
import useService from "../hook/useService";
import Service from "./Service";

const Services = () => {
  const [services] = useService();
  const newServices = [services[0], services[1], services[2]];
  return (
    <div className="services-container my-16 container mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12">
        {newServices?.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
      <div className=" flex justify-center">
        <button className="btn btn-primary">
          <Link to="/services">Explore More</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
