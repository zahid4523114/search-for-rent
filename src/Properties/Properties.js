import React from "react";

const Properties = ({ rent }) => {
  const { image, name, location, price } = rent;
  return (
    <div>
      <div className="card card-compact lg:w-80 w-full lg:my-0 my-5 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">{location}</p>
          <p className="font-bold">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
