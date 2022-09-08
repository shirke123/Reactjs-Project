import React from 'react'

function LoginFrom() {

    const userobj={
     
         UserName:"",
         Password:"",
         
    }
 
    const[user,setUser]=React.useState(userobj)
 
    const[userData,setUserData]=React.useState({})
 
    const handleInput=(event)=>{
      //  setText(event.target.value)
       console.log(event.target);
        setUser({...user,[event.target.name]:event.target.value})
    }
 
    const showData=()=>{
        console.log(user);
        setUserData({...user})
    }
 
 
 
   return (

    <div>
    <br /><br />
    <div className = "container">
         <div className = "row">
             <div className = "card col-md-6 offset-md-3 offset-md-3">
                {
                   <h3 className = "text-center">Login In</h3>
                }
                 <div className = "card-body">
     {/* <form> */}
   
      <div className = "form-group mb-2">
    <label className = "form-label"> UserName :</label>
         <input type="text" class="form-control"name="UserName"
          placeholder = "Enter Username"
          onChange={handleInput}/>
       </div>

       <div className = "form-group mb-2">
    <label className = "form-label"> Password :</label>
         <input type="text"class="form-control" name="Password"
         placeholder = "Enter Password"
          onChange={handleInput}/>
         </div><br/>
          
 
         <div className="form-group">
         <button type="submit" className="btn btn-primary mr-1"  onClick={showData}>Submit</button>
         <button to="/employees" className="btn btn-danger"> Cancel </button>

         </div>
         
     {/* </from> */}
          {/* <DisplayData data={userData}/>   */}
         </div>
         </div>
         </div>
         </div>
         </div>
     )
   }
 
//    function DisplayData({data}){
 
//    return(
//          <div>
//            <h3>From Details:</h3>
//            <p>UserName: {data.UserName}</p>
//            <p>Password: {data.Password}</p>
//          </div>
         
//    )
//  }
 export default LoginFrom;