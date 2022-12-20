import React, { useState } from "react";
import face1 from "../../assets/icons/Group 1.png";
import face2 from "../../assets/icons/Group 2.png";
import face3 from "../../assets/icons/Group 3.png";
import Service from "../Home/Service";

const Services = () => {
  const [isBooking, setIsBooking] = useState(true);
  const services = [
    {
      _id: 1,
      image: face1,
      price: 199,
      name: "Anti Age Face Treatment",
      description:
        "our hospital open in 24/7 hours lorem8our hospital open in 24/7 hours lorem8 our hospital open in 24/7 hours lorem8",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      _id: 2,
      image: face2,
      price: 99,
      name: "Hair Color & Styling",
      description:
        "our hospital open in 24/7 hours our hospital open in 24/7 hours lorem8 our hospital open in 24/7 hours lorem8",
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      image: face3,
      price: 299,
      name: "Skin Care Treatment",
      description:
        "our hospital open in 24/7 hours our hospital open in 24/7 hours lorem8 our hospital open in 24/7 hours lorem8",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      _id: 4,
      image: face1,
      price: 199,
      name: "Anti Age Face Treatment",
      description:
        "our hospital open in 24/7 hours lorem8our hospital open in 24/7 hours lorem8 our hospital open in 24/7 hours lorem8",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      _id: 5,
      image: face2,
      price: 99,
      name: "Hair Color & Styling",
      description:
        "our hospital open in 24/7 hours our hospital open in 24/7 hours lorem8 our hospital open in 24/7 hours lorem8",
      bgClass: "bg-accent",
    },
    {
      _id: 6,
      image: face3,
      price: 299,
      name: "Skin Care Treatment",
      description:
        "our hospital open in 24/7 hours our hospital open in 24/7 hours lorem8 our hospital open in 24/7 hours lorem8",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="services-container my-16 container mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12">
        {services.map((service) => (
          <Service isBooking={isBooking} service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
