import React,{Fragment, useState}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar component/navbar';
import Home from './navbar component/Home';
import About from './navbar component/About';
import Employee from './navbar component/Employee';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Page404 from './navbar component/Page404';

function App()
{
  return(
    <div className='App'>
        <BrowserRouter>   
        <h1>Red & White</h1> 
            <Navbar/>
                <Routes>
                  <Route path='/Home' element={<Home/>}></Route> &nbsp; &nbsp;
                   <Route path='/About' element={<About/>}></Route> &nbsp; &nbsp;
                   <Route path='/Employee' element={<Employee/>}></Route> &nbsp; &nbsp;
                   <Route path='/*' element={<Page404/>}></Route> &nbsp; &nbsp;
                </Routes>
        </BrowserRouter>
    </div>)
}

export default App;



