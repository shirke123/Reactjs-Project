import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Patient from "./Patient";

export default function AddPatient() {
  let navigate = useNavigate();

  const [patient, setPatient] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
  });

  const { firstname, lasname, address, email,dateofbirth,gender,mobileno } =Patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/savePatient", patient);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 className="text-center m-4">Patient Registerations</h3>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your FirstName"
                name="FirstName"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="form-label">
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your LastName"
                name="LastName"
                value={lasname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="Address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="DateOfBirth" className="form-label">
                DateOfBirth
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your DateOfBirth"
                name="DateOfBirth"
                value={dateofbirth}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor=" Gender" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor=" MobileNo." className="form-label">
                MobileNo.
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Mobile No."
                name="MobileNo"
                value={mobileno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className = "btn btn-success">
              Submit
            </button>
            <Link className="btn btn-danger" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}