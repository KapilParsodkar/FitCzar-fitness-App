// This is the root component for the FitCzar front end

import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css';

// Pages
import Login from './pages/Login';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';


function App() {
   const slogan = "Your fitness coach and reminder"


   // Render the current page
   return (

      <div className="App">

         <BrowserRouter>
             <nav>
                 {/* Anything in this <nav> bloc will appear on every page */}
                 <h1 className='title'>FitCzar</h1>
                 <p className='slogan'>Your fitness coach and reminder</p>
              </nav>
              <Routes>
                 <Route path='/' element={ <Login /> } />
                 <Route path='/profile' element={ <Profile /> } />
                 <Route path='/welcome' element={ <Welcome /> } />
              </Routes>
 
         </BrowserRouter>
      </div>
   );
}

export default App;
