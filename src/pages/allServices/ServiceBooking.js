import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const ServiceBooking = () => {
  const { id } = useParams();
  const { data: service, isLoading } = useQuery(["doctors", id], () =>
    axios
      .get(`http://localhost:5050/services/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err))
  );
  console.log(service);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="card md:w-1/2 mx-auto bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          You Are Going to Booking for : {service[0]?.name}{" "}
        </h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
