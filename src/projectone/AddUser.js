import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Link,  } from "react-router-dom";

export default function AddUser() {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  const[data,setData]=React.useState([])

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("localhost:8080/user");
//   }
  useEffect(()=>{
    // console.log('hiiiiiii');
    axios.get("https://localhost:8080/user"/user)
        .then((response)=>response.data)
        .then(res=>{
            setData(res)
        })
},[])

const getData=()=>{
    axios.get("https://localhost:8080/user"/user)
    .then((response)=>response.data)
    .then(res=>{
        setData(res)
    })
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => getData(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
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
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}