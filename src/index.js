import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddEmp from './component/AddEmp';
import ListEmp from './component/ListEmp';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Patient from './patient/Patient';
import Search from './task/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
<App/>   


  </React.StrictMode>
);


reportWebVitals();
