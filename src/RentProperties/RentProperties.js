import React, { useState } from "react";
import Properties from "../Properties/Properties";

const RentProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loader, setLoader] = useState(true);

  const handleSearchRent = (event) => {
    event.preventDefault();
    const form = event.target;

    const location = form.location.value;
    const date = form.date.value;
    const price = form.price.value;
    const type = form.type.value;

    //get data by query
    const url = `https://real-state-rent-sell-server.vercel.app/rentProperties?name=${type}&price=${price}&location=${location}&date=${date}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProperties(data);
        setLoader(false);
      });
  };
  //   console.log(properties);
  return (
    <section className="lg:m-10 m-3">
      <div className="lg:flex justify-between items-center">
        <div
          className="lg:tooltip tooltip-open lg:tooltip-right"
          data-tip="Dec-1 to Dec-3 hurry up!"
        >
          <h1 className="font-bold lg:text-4xl lg:mb-0 mb-3 text-2xl">
            Search property to rent
          </h1>
        </div>
        <div className="form-control">
          <div className="input-group ">
            <select className="select select-bordered">
              <option disabled selected>
                Search with Search Bar
              </option>
              <option>T-shirts</option>
              <option>Mugs</option>
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
      </div>

      {/* find rent house */}
      <form onSubmit={handleSearchRent} className="my-5">
        <div className="shadow-lg p-5 lg:flex lg:flex-row flex-col justify-between items-center ">
          <select
            name="location"
            className="select  lg:w-1/5 w-full lg:mb-0 mb-5 bg-slate-200  block"
          >
            <option disabled selected>
              Location
            </option>
            <option className="font-bold">New-York,USA</option>
          </select>
          <select
            name="date"
            className="select  lg:w-1/5 w-full lg:mb-0 mb-5 bg-slate-200  block"
          >
            <option disabled selected>
              When
            </option>
            <option className="font-bold">Dec-1-22</option>
            <option className="font-bold">Dec-2-22</option>
            <option className="font-bold">Dec-3-22</option>
          </select>
          <select
            name="price"
            className="select  lg:w-1/5 w-full lg:mb-0 mb-5 bg-slate-200  block"
          >
            <option disabled selected>
              Price
            </option>
            <option className="font-bold">500</option>
            <option className="font-bold">1000</option>
            <option className="font-bold">1500</option>
          </select>
          <select
            name="type"
            className="select lg:w-1/5 w-full lg:mb-0 mb-5 bg-slate-200  block"
          >
            <option disabled selected>
              Property Type
            </option>
            <option className="font-bold">Single-Family-Homes</option>
            <option className="font-bold">Semi-Detached-Home</option>
            <option className="font-bold">Multifamily-Homes</option>
          </select>
          <button className="btn btn-primary text-white ">Search</button>
        </div>
      </form>
      {/* rent properties */}
      {properties && loader ? (
        <div className="mx-auto w-20">
          <progress className="progress w-full"></progress>
        </div>
      ) : (
        <div className="flex justify-between lg:flex-row flex-col my-10">
          {properties.map((property, i) => (
            <Properties key={i} rent={property}></Properties>
          ))}
        </div>
      )}
    </section>
  );
};

export default RentProperties;
