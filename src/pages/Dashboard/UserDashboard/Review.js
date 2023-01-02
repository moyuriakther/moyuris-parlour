import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-base-200 pl-6 pt-8">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs my-2">
          <input
            type="text"
            placeholder="Type Your Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <input
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <textarea className="textarea" placeholder="Description" />
        </div>
        <input
          type="submit"
          className="btn btn-primary w-full max-w-xs mt-2"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Review;
