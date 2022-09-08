import React, {useState} from 'react'
import axios from 'react'
import { Link, useNavigate } from 'react'


export default function Patient() {

  const[user,setUser]=React.useState({

    // Title:"",
    firstname:"",
    lastname:"",
    address:"",
    emailid:"",
    mobileno:"",
    dateofbirth:"",
    // Gender:""    
  });
  const { firstname, lastname, address,emailid,mobileno,dateofbirth } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios.get("http://llocalhost:8080/getAll");
  //   // navigate("/");
  // };

 



  return (
<div>
           <br /><br />
           <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
           
    <form onSubmit={(e) => onSubmit(e)}>


{/*                                 
       <select class="form-select" aria-label="Default select example"onChange={handlechange}>
  <option selected>Title</option>
  <option value="Miss.">Miss.</option>
  <option value="Mr.">Mr.</option>
  <option value="Dr.">Dr.</option>
  <option value="Miss">miss.</option>
  <option value="Other">Other</option>
  
</select> */}

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstname}
                                        // onChange = {(e) => setFirstName(e.target.value)}
                                        onChange={(e) => onInputChange(e)}
                                        >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastname}
                                        // onChange = {(e) => setLastName(e.target.value)}
                                        onChange={(e) => onInputChange(e)}
                                        >
                                    </input>
                                </div>


            
        <div className = "form-group mb-2">
        <label className = "form-label"> Address :</label>
          <input type="text"class="form-control" name="Address" placeholder="Enter Address"
          value = {address}
          onChange={(e) => onInputChange(e)}/>

          </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailid}
                                        onChange={(e) => onInputChange(e)}

                                    >
                                    </input>
                                </div>

        < div className = "form-group mb-2">
        <label className = "form-label"> Mobile No:</label>                      
          <input type="text"class="form-control" name="MobileNo" placeholder="Enter MobileNo"
          value={mobileno}
                                               onChange={(e) => onInputChange(e)}></input>

       </div>

          <div className = "form-group mb-2">
        <label className = "form-label"> Date Of Birth:</label>
        <input type="Date" class="form-control" name="DateOfBirth" placeholder="Enter Date" 
                  value={dateofbirth}

                                                onChange={(e) => onInputChange(e)}
                                                /> 
        </div>

{/* 
        <select class="form-select" aria-label="Default select example" >
  <option selected>Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
  </select><br/> */}
    
                                <button className = "btn btn-success" >Submit </button>
                                <button to="/employees" className="btn btn-danger"> Cancel </button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
        



  )
}
