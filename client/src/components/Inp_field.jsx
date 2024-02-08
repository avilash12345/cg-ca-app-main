import React, { useState } from "react";
import axios from "axios";

const Inp_field = () => {
  const [data, setData] = useState({
    slno: "",
    state: "",
    capital: "",
    chief_minister: "",
    governor: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/v1/api/create", data)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            onChange={handlechange}
            name="slno"
            value={data.slno}
          />
          <label htmlFor="floatingInputGroup1">Slno</label>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            onChange={handlechange}
            name="state"
            value={data.state}
          />
          <label htmlFor="floatingInputGroup1">State</label>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            onChange={handlechange}
            name="capital"
            value={data.capital}
          />
          <label htmlFor="floatingInputGroup1">Capital</label>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            onChange={handlechange}
            name="chief_minister"
            value={data.chief_minister}
          />
          <label htmlFor="floatingInputGroup1">Chief_minister</label>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
            onChange={handlechange}
            name="governor"
            value={data.governor}
          />
          <label htmlFor="floatingInputGroup1">Governor</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
        submit
      </button>
    </>
  );
};

export default Inp_field;
