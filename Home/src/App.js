import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/SignUp';
import Login from './components/Login';


function App() {
  return (

     <Router>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
  
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     <Footer/>
</Router>
  );
}

export default App;
