import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const ServiceBookingModal = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit}
            className="rounded px-8 pt-6 pb-8 mb-4 w-full "
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                name="date"
                disabled
                type="text"
                // value={format(date, "PP")}
              />
            </div>
            <div className="mb-4">
              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="name"
                type="text"
                placeholder="Full Name"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={user?.email}
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            <div className="">
              <input
                className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-secondary to-primary text-white leading-tight focus:outline-none focus:shadow-outline"
                id="submit"
                type="submit"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingModal;
