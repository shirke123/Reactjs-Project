import { Link, useNavigate } from "react-router-dom";
import React,{useState, useEffect} from 'react'
import { View } from "../component/View";

const getDatafromLS=()=>{
  const data = localStorage.getItem('user');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
export default function AddUser() {

  const [users, setusers]=useState(getDatafromLS());


  
  const [firstname, setFirstName]=useState('');
  const [lastname, setLastName]=useState('');
  const [address, setAddress]=useState('');
  const [email, setEmail]=useState('');
  const [ mobileno, setMobileno]=useState('');

  
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
  
    let user={
      firstname,
      lastname,
      address,
      email,
      mobileno,
    }
    setusers([...users,user]);
    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setMobileno('');
  }

  
  const deleteUser=(isbn)=>{
    const filteredBooks=users.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setusers(filteredBooks);
  }

  
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(users));
  },[users])
    
     
  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 className="text-center m-4">UserRegister</h3>

          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"required
                placeholder="Enter your firstname"
                name="FirstName"
                onChange={(e)=>setFirstName(e.target.value)} value={firstname}></input>

              
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="form-label">
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"required
                placeholder="Enter your lastname"
                name="LastName"
                onChange={(e)=> setLastName(e.target.value)} value={lastname}></input>

              
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"required
                placeholder="Enter your address"
                name="Address"
                onChange={(e)=>setAddress(e.target.value)} value={address}></input>

              
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"required
                placeholder="Enter your e-mail address"
                name="email"
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>

            </div>
            
            <div className="mb-3">
              <label htmlFor=" MobileNo." className="form-label">
                MobileNo.
              </label>
              <input
                type={"text"}
                className="form-control"required
                placeholder="Enter your mobile no."
                name="MobileNo"
                onChange={(e)=>setMobileno(e.target.value)} value={mobileno}></input>

              
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
    </div><br/><br/>

        <div className="container">
          {users.length>0&&<>
            <div className="py-4">
              <table  className="table border shadow">
                <thead>
                  <tr>
              <th scope="col">id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LasName</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">MobileNo</th>
              <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <View users={users} deleteBook={deleteUser}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setusers([])}>Remove All</button>
          </>}
          {users.length < 1 &&<div>No Users are added yet</div>}
        </div>

      </div>
   
   
  )
}
