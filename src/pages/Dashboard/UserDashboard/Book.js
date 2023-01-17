import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const Book = () => {
  const [phone, setPhone] = useState();
  console.log(phone);
  const [paymentSelectValue, setPaymentSelectValue] = useState("cash");
  const location = useLocation();
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setPaymentSelectValue(e.target.value);
  // };
  const handleAppointment = (e) => {
    e.preventDefault();
    navigate("/cardPay");
  };
  return (
    <div className="bg-base-200 pl-6 py-8">
      <form action="" className="pl-6 pt-8">
        <div className="">
          <div className="form-control w-full max-w-xs my-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName}
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs my-2">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              value={user?.email}
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs my-2">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              value={location?.state?.name}
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs my-2">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              value={`$${location?.state?.price}`}
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs my-2">
            <input
              type="text"
              placeholder="Your Phone Number"
              className="input w-full max-w-xs"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {(phone && (
            <button
              className="btn btn-primary px-8"
              onClick={handleAppointment}
            >
              Process
            </button>
          )) || (
            <button className="btn btn-primary" disabled>
              Process
            </button>
          )}
        </div>
        {/* <div> */}
        {/* <p className="text-primary text-xl py-3">Pay with</p>
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            {" "}
            <input
              type="radio"
              value="card"
              name="card"
              checked={paymentSelectValue === "card"}
              onChange={handleChange}
              className="radio radio-sm radio-primary mr-2"
            />{" "}
            <label htmlFor="card">Card</label>
          </div>
          <div className="flex items-center">
            {" "}
            <input
              type="radio"
              name="cash"
              value="cash"
              checked={paymentSelectValue === "cash"}
              onChange={handleChange}
              className="radio radio-sm radio-primary mr-2"
            />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
        </div> */}
        {/* <div className="form-control w-full max-w-xs my-2 mt-4 pb-5">
          {(paymentSelectValue === "card" && (
            <button className="btn btn-primary" onClick={handlePay}>
              Card Pay
            </button>
          )) || (
            <button className="btn btn-primary">
              Process Cash On Delivery
            </button>
          )}
        </div> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default Book;
