import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'


import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUsers';
import ViewUsers from './users/ViewUsers';
import Home from './users/Home';

import HomePage from './patient/HomePage';
import AddPatient from './patient/AddPatient';
import EditPatient from './patient/EditPatient';
import ViewPatient from './patient/ViewPatient';
import AddUser from './task/AddUser';
import Search from './task/Search';
import Navbar from './users/Navbar';

function App() {
  return (
    <div >
 
   <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/adduser" element={<AddUsers/>} />
          <Route exact path="/edituser/:id" element={<EditUsers/>} />
          <Route exact path="/viewuser/:id" element={<ViewUsers/>} />
        </Routes>
      </BrowserRouter>


{/* <BrowserRouter>
        <Nav/>

        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/adduser" element={<AddPatient/>} />
          <Route exact path="/edituser/:id" element={<EditPatient/>} />
          <Route exact path="/viewuser/:id" element={<ViewPatient/>} />
        </Routes>
      </BrowserRouter>  */}



      {/* <BrowserRouter>
        <Navbar/>

        <Routes>
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/adduser" element={<AddUser/>} />

        </Routes> 
      </BrowserRouter>  */}




        </div>
  );
}

export default App;
