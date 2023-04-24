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
import Ecore from './Exercises/Ecore';
import Eaerobic from './Exercises/Eaerobic';
import Mcore from './Exercises/Mcore';
import Mupper from './Exercises/Mupper';
import Mlegs from './Exercises/Mlegs';
import Hupper from './Exercises/Hupper';
import Hlegs from './Exercises/Hlegs';
import PrivateComp from './components/PrivateComp';
import Exerciselist from './components/Exerciselist';
import AddExercises from './components/AddExercises';
import UpdateExercises from './components/updateExercise';

function App() {

  return (
      <div>
      <Router>
      <Header/>
      <Routes>
      <Route element={<PrivateComp/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="/profile" element={<Profile/>}/>

         <Route path="/easy" element={<Easy/>}/>
         <Route path="/medium" element={<Medium/>}/>
         <Route path="/hard" element={<Hard/>}/>

         <Route path="/elegs" element={<Elegs/>}/>
         <Route path="/eupper" element={<Eupper/>}/>
         <Route path="/ecore" element={<Ecore/>}/>
         <Route path="/eaerobic" element={<Eaerobic/>}/>

         <Route path="/mlegs" element={<Mlegs/>}/>
         <Route path="/mupper" element={<Mupper/>}/>
         <Route path="/mcore" element={<Mcore/>}/>

         <Route path="/hlegs" element={<Hlegs/>}/>
         <Route path="/hupper" element={<Hupper/>}/>

         <Route path="/exerciselist" element={<Exerciselist/>}/>
         <Route path="/add" element={<AddExercises/>}/>
         <Route path="/update/:id" element={<UpdateExercises/>}/>
         <Route path="/logout" element={<h1> logout Product list</h1>}/>
         </Route>

         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
      </Router>
      <Footer/>
      </div>

  );
}

export default App;
