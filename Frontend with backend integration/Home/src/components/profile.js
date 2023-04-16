import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Text,
  Container,
  Table,
  Input,
  Select,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
// For fielding data passed from Login
import { useLocation } from "react-router-dom"
import './exercise.css'


// FUNCTION FOR THIS PAGE
const Profile = ({setLoginUser}) => {
  const nav = useNavigate();
  const [post, setPost] = useState([])
  // To capture data from Login
  // const location = useLocation();

  // Will want to pull these lists from a database rather than hard-coding them here
  const allGoals = ["Muscle gain", "Weight loss", "Flexibility", "Aerobic endurance", "Mobility", "Health maintenance"];
  const allMedicalConditions = ["Diabetes", "High blood pressure", "Asthma", "Arthritis", "Other"];
  const allDietaryRestrictions = ["Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Pescatarian", "Other"];

  // Data set on this page
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    gender: "",
    height: "",
    heightUnits: "",
    weight: "",
    weightUnits: "",
    fitnessGoals: [""],
    medicalConditions: [""],
    dietaryRestrictions: [""],
    workoutHistory: ""
  })
  
  
  // Update the value for whichever control has changed
  const handleChange = e => {
    const { name, value } = e.target
    setProfile({
      ...profile,
      [name]: value
    })
  }


  // Call this react function to retrieve DB data
  useEffect(() => {
    axios.get("http://localhost:3003/profile")
 
    .then((response) => {
      setPost(response.data);
    });
  }, []);


  // Pressing a button in a form fires the Submit event for that form.
  // Therefore, this runs when the user clicks the Update Profile button.
  // Write user profile data to storage
  const updateProfile = (e) => {
    // Prevent page refresh (that's the default action)
    e.preventDefault();

    // Send the data object to the back end and get its response
    axios.post("http://localhost:3003/signup", profile)
      .then(res => {
        alert(res.data.message);
        nav("/exercisehome")
      })
      .catch(err => {
        alert(err);
      });

  }


  // Message to display while waiting
  if (!post) return <div>Loading...</div>;


  // RENDER THE PAGE
  return (

    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <Text fontSize="6xl">Profile</Text>
      <p>Please provide your data and physiological profile.</p>
      <p>You’ll be able to update this information at any time.</p>

      <VStack>

      {/*
      <table border={'122px'}>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {post.map(i => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
            </tr>
          )
        })}
      </table>
      */}   

        {/* Input controls to collect user profile data */}

        <div className="firstName">
          <Input type="text" name="firstName" placeholder="enter first name" value={profile.firstName} onChange={handleChange} />
        </div>

        <div className="lastName">
          <Input type="text" name="lastName" placeholder="enter last name" value={profile.lastName} onChange={handleChange} />
        </div>

        <div className="age">
          <Input type="integer" name="age" placeholder="enter age (years)" value={profile.age} onChange={handleChange} />
        </div>

        <div className="gender">
          <Select type="text" name="gender" value={profile.gender} onChange={handleChange}>
            <option selected hidden disabled value="">select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="NonBinary">Non-binary</option>
          </Select>
        </div>

        <div className="height">
          <HStack>
            <Input type="integer" name="height" placeholder="enter height" value={profile.height} onChange={handleChange} />
            <Select type="text" name="heightUnits" value={profile.heightUnits} onChange={handleChange}>
              <option value="inches">inches</option>
              <option value="cm">cm</option>
            </Select>
          </HStack>
        </div>

        <div className="weight">
          <HStack>
            <Input type="integer" name="weight" placeholder="enter weight" value={profile.weight} onChange={handleChange} />
            <Select type="text" name="weightUnits" value={profile.weightUnits} onChange={handleChange}>
              <option value="pounds">pounds</option>
              <option value="kg">kg</option>
            </Select>
          </HStack>
        </div>

        <div className="phoneNumber">
          <Input type="text" name="phoneNumber" placeholder="enter mobile phone" value={profile.phoneNumber} onChange={handleChange} />
        </div>

        <div className="fitnessGoals">
          <Select type="text" name="fitnessGoals" value={profile.fitnessGoals} onChange={handleChange}>
            <option selected hidden disabled value="">select fitness goal(s)</option>
            {allGoals.map(item => {
              return (<option>{item}</option>);
            })}
          </Select>
        </div>

        <div className="medicalConditions">
          <Select type="text" name="medicalConditions" value={profile.medicalConditions} onChange={handleChange}>
            <option selected hidden disabled value="">select any medical conditions</option>
            {allMedicalConditions.map(item => {
              return (<option>{item}</option>);
            })}
          </Select>
        </div>

        <div className="dietaryRestrictions">
          <Select type="text" name="dietaryRestrictions" value={profile.dietaryRestrictions} onChange={handleChange}>
            <option selected hidden disabled value="">select any dietary restrictions</option>
            {allDietaryRestrictions.map(item => {
              return (<option>{item}</option>);
            })}
          </Select>
        </div>

        <div className="workoutHistory">
          <Select type="text" name="workoutHistory" value={profile.workoutHistory} onChange={handleChange}>
            <option selected hidden disabled value="">select exercise level</option>
            <option value='Beginner'>Beginner</option>
            <option value='Occasional exercise'>Occasional exercise</option>
            <option value='Regular exercise'>Regular exercise</option>
            <option value='Athlet'>Athlete</option>
          </Select>
        </div>

        <div className="button" onClick={updateProfile}>
          Update profile
        </div>

        <div className="button" onClick={() => nav("/exercisehome")}>
          ExerciseHome
        </div>

      </VStack>

    </Container>
  );
};

export default Profile;
