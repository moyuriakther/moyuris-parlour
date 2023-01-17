import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const ServiceBooking = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { data: service, isLoading } = useQuery(["doctors", id], () =>
    axios
      .get(`http://localhost:5050/service/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err))
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const handleAccept = (e) => {
    navigate("/dashboard", {
      state: { price: service?.price, name: service?.name },
    });
  };
  return (
    <div className="card md:w-1/2 mx-auto bg-neutral text-white py-3 my-8">
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          You Are Going to Booking for :<strong> {service?.name}</strong>{" "}
        </h2>
        <p>
          Please Pay <small>${service?.price}</small> for this Appointment
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAccept}>
            Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
