import React from "react";
import { useParams } from "react-router-dom";

const ServiceBooking = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

export default ServiceBooking;
