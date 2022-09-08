import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function HomePage() {
  const [patient, setPatient] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get("http://localhost:8080/getAll");
    setPatient(result.data);
  };

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadPatient();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
            
            </tr>
          </thead>
          <tbody>
            {patient.map((patient, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{patient.firstname}</td>
                <td>{patient.lastname}</td>
                <td>{patient.eaddress}</td>
                <td>{patient.email}</td>
                <td>{patient.edateofbirth}</td>
                <td>{patient.egender}</td>
                <td>{patient.emobileno}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpatient/${patient.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpatient/${patient.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePatient(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
