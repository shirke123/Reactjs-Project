import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Patient from "./Patient";

export default function ViewPatient() {
  const [patient, setPatient] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8080/getAll/${id}`);
    setPatient(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Patient Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Patient id : {Patient.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {patient.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {patient.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {patient.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}