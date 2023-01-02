import React, { useState } from "react";
import ServiceBookingModal from "./ServiceBookingModal";
import Service from "../Home/Service";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const AvailableServices = () => {
  const [bookService, setBookService] = useState(null);
  const [isBooking, setIsBooking] = useState(true);
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available"], () =>
    axios.get(`http://localhost:5050/services`).then((res) => {
      return res.data;
    })
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12">
        {services.map((service) => (
          <Service
            isBooking={isBooking}
            service={service}
            key={service._id}
            setBookService={setBookService}
          />
        ))}
      </div>
      {bookService && (
        <ServiceBookingModal
          bookService={bookService}
          setBookService={setBookService}
        />
      )}
    </div>
  );
};

export default AvailableServices;
