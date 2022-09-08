import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddEmp from './component/AddEmp';
import ListEmp from './component/ListEmp';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Patient from './projectone/Patient';
import Nav from './projectone/Nav';
import LoginFrom from './projectone/LoginFrom';
import ListPatient from './projectone/ListPatient';
import Home from './projectone/Home';
import AddUser from './projectone/AddUser';
import Simple from './Simple';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Nav/>   

      {/* <LoginFrom/>
    //       <ListPatient/>  */}
    {/* //  <Home/>
    //  <AddUser/> */}


       {/* <NavBar/>
       <AddEmp/> */}
       {/* <ListEmp/> */}
       {/* <Footer/> */}
        <Patient/>
<Simple/>       
  </React.StrictMode>
);


reportWebVitals();
