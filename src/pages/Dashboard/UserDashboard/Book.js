import React from "react";

const Book = () => {
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-base-200 pl-6 pt-8">
      {/* <form action="" className="pl-6 pt-8"> */}
      <div className="">
        <div className="form-control w-full max-w-xs my-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
        </div>
        {/* </form> */}
      </div>
      <div>
        <p className="text-gray-500 text-sm py-3">Pay with</p>
        <div className="flex items-center">
          <p className="flex items-center mr-3">
            {" "}
            <input
              type="radio"
              name="radio-2"
              onChange={handleChange}
              className="radio radio-sm radio-primary mr-2"
              checked
            />{" "}
            <span> Card</span>
          </p>
          <p className="flex items-center">
            {" "}
            <input
              type="radio"
              name="radio-2"
              onChange={handleChange}
              className="radio radio-sm radio-primary mr-2"
            />
            <span> Cash on delivery</span>
          </p>
        </div>
        <div className="form-control w-full max-w-xs my-2 mt-4 pb-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
