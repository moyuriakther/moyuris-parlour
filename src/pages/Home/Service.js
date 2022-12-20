import React from "react";

const Service = ({ service, isBooking }) => {
  return (
    <div className="card flex text-black p-6 md:card-side shadow-xl">
      <div className="card-body p-0 items-center text-center">
        <img
          style={{ height: "72px", width: "72px" }}
          src={service?.image}
          alt="service-images"
        />
        <h2 className="card-title font-bold">{service?.name}</h2>
        <h2 className="card-title text-primary">${service?.price}</h2>
        <p className="text-gray-500">{service?.description}</p>
        {isBooking && <button className="btn btn-primary">Book now</button>}
      </div>
    </div>
  );
};

export default Service;
