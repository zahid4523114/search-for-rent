import React from "react";

const RentProperties = () => {
  const handleSearchRent = (event) => {
    event.preventDefault();
    const form = event.target;

    const location = form.location.value;
    const date = form.date.value;
    const price = form.price.value;
    const type = form.type.value;
    console.log(location, date, price, type);
  };
  return (
    <section className="lg:m-10 m-3">
      <div className="lg:flex justify-between items-center">
        <div
          className="lg:tooltip tooltip-open lg:tooltip-right"
          data-tip="Dec-1 to Dec-4 hurry up!"
        >
          <h1 className="font-bold lg:text-4xl lg:mb-0 mb-3 text-2xl">
            Search property to rent
          </h1>
        </div>
        <div className="form-control">
          <div className="input-group ">
            <select className="select select-bordered">
              <option disabled selected>
                Pick category
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
            <option className="font-bold">Homer</option>
            <option className="font-bold">Marge</option>
            <option className="font-bold">Bart</option>
            <option className="font-bold">Lisa</option>
            <option>Maggie</option>
          </select>
          <select
            name="date"
            className="select  lg:w-1/5 w-full lg:mb-0 mb-5 bg-slate-200  block"
          >
            <option disabled selected>
              When
            </option>
            <option className="font-bold">Dec-1-2022</option>
            <option className="font-bold">Dec-2-2022</option>
            <option className="font-bold">Dec-3-2022</option>
            <option className="font-bold">Dec-4-2022</option>
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
            <option className="font-bold">Single-Family Homes</option>
            <option className="font-bold">Semi-Detached Home</option>
            <option className="font-bold">Multifamily Homes</option>
            <option className="font-bold">Apartments </option>
          </select>
          <button className="btn btn-primary text-white ">Search</button>
        </div>
      </form>
    </section>
  );
};

export default RentProperties;
