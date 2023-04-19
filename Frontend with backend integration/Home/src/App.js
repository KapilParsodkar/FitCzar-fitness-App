import React,{useState}from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/SignUp';
import Login from './components/Login';
import ExerciseHome from './components/Exercise';
import Profile from './components/profile';
import Easy from './Exercises/Easy';
import Hard from './Exercises/Hard';
import Medium from './Exercises/Medium';
import Elegs from './Exercises/Elegs';
import Eupper from './Exercises/Eupper';
import Mupper from './Exercises/Mupper';
import Mlegs from './Exercises/Mlegs';
import Hupper from './Exercises/Hupper';
import Hlegs from './Exercises/Hlegs';


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
         <Route path="/easy" element={<Easy/>}/>
        <Route path="/medium" element={<Medium/>}/>
        <Route path="/hard" element={<Hard/>}/>
        <Route path="/elegs" element={<Elegs/>}/>
        <Route path="/eupper" element={<Eupper/>}/>
        <Route path="/mlegs" element={<Mlegs/>}/>
        <Route path="/mupper" element={<Mupper/>}/>
        <Route path="/hlegs" element={<Hlegs/>}/>
        <Route path="/hupper" element={<Hupper/>}/>
            </Routes>

     <Footer/>
</Router>
  );
}

export default App;
