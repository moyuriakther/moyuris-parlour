import React from "react";

const HandleProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-10 bg-secondary flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold text-center pb-10">
          Let us handle your <br /> project, professionally.
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full max-w-xs my-2 mr-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full max-w-xs my-2"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-xs my-2 mr-4"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input w-full max-w-xs my-2"
            />
          </div>
          <textarea
            className="textarea w-full my-2"
            placeholder="Your Message"
          ></textarea>{" "}
          <br />
          <div className="flex justify-center">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HandleProject;
