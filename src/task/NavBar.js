import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" to="/">
           Home
          </a>
         
             <a href = "" className = "navbar-brand">
                    About
                        </a>
          
                        <a href = "" className = "navbar-brand">
                            services
                        </a>
                        <a href = "" className = "navbar-brand">
                            Contact
                        </a>
      </nav><br/><br/>
      
      <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
    </div>
  );
}