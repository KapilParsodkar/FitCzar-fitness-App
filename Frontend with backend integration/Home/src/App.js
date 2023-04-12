import React,{useState}from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/SignUp';
import Login from './components/Login';
import ExerciseHome from './components/Exercise';


function App() {
  const [ user, setLoginUser] = useState({})
  return (

     <Router>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
  
      <Route path="/exercisehome" element={
           user && user._id ? <ExerciseHome setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
        }/>
           

        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>

        <Route path="/signup" element={<Signup />}/>

    
        <Route path="/profile" element={<Profile/>}/>
            </Routes>

     <Footer/>
</Router>
  );
}

export default App;
