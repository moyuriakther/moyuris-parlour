import React from "react";

const BookingListCard = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-between">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="avatar" />
            </div>
          </div>
          <button className="btn btn-sm btn-primary">Pending</button>
        </div>
        <h2 className="card-title">Card title!</h2>
        <p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nemo.
          </small>
        </p>
      </div>
    </div>
  );
};

export default BookingListCard;
